const articleSchema = {
  type: 'object',
  properties: {
    source: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
    },
    author: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    url: { type: 'string' },
    urlToImage: { type: 'string' },
    publishedAt: { type: 'string' },
    content: { type: 'string' },
  },
};

const articlesSchema = {
  type: 'array',
  items: articleSchema,
};

const newsSchema = {
  querystring: {
    type: 'object',
    properties: {
      q: { type: 'string' },
      pageSize: { type: 'number' },
      page: { type: 'number' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        totalResults: { type: 'number' },
        articles: articlesSchema,
      },
    },
  },
};

module.exports = {
  newsSchema,
};
