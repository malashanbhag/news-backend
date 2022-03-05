const { topHeadlinesHandler, everythingHandler } = require('../handler/newsapi');
const { newsSchema } = require('../schema/newsapi');

async function routes(fastify) {
  fastify.get('/live', async () => 'I am up');

  fastify.get('/topHeadlines', { schema: newsSchema }, topHeadlinesHandler);

  fastify.get('/everything', { schema: newsSchema }, everythingHandler);
}

module.exports = routes;
