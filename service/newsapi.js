const NewsAPI = require('newsapi');

async function topHeadlinesService(xApiKey, query) {
  const newsapi = new NewsAPI(xApiKey);
  try {
    const result = await newsapi.v2.topHeadlines(query);
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

async function everythingService(xApiKey, query) {
  const newsapi = new NewsAPI(xApiKey);
  try {
    const result = await newsapi.v2.everything(query);
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  topHeadlinesService,
  everythingService,
};
