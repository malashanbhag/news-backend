const newsApiService = require('../service/newsapi');

async function topHeadlinesHandler(req, reply) {
  try {
    const result = await newsApiService.topHeadlinesService(this.config.X_API_KEY, req.query);
    return reply.status(200).send(result);
  } catch (err) {
    return reply.send(err);
  }
}

async function everythingHandler(req, reply) {
  try {
    const result = await newsApiService.everythingService(this.config.X_API_KEY, req.query);
    return reply.status(200).send(result);
  } catch (err) {
    return reply.send(err);
  }
}

module.exports = {
  topHeadlinesHandler,
  everythingHandler,
};
