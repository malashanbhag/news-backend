/* eslint-disable no-undef */
const fastify = require('../../index');
const newsApiService = require('../../service/newsapi');

const newsData = {
  status: 'ok',
  totalResults: 20,
  articles: [
    {
      source: {
        id: 'google-news-in',
        name: 'Google News India',
      },
      author: '',
      title: 'Indian Student Shot While trying to escape Kyiv',
      url: 'https://www.ndtv.com/india-news/heard-reports-of-indian-student-shot-at-in-ukraine-capital-kyiv-union-minister-vk-singh-2802652',
      urlToImage: 'https://c.ndtvimg.com/2022-02/doufmcto_ukraine-afp_625x300_28_February_22.jpg',
      publishedAt: '2022-03-04T03:53:00+00:00',
      content: 'He was reportedly taken back to the city and is in hospital',
    },
  ],
};

jest.mock('../../service/newsapi');

const newsService = () => {
  newsApiService.topHeadlinesService.mockResolvedValue(newsData);
  newsApiService.everythingService.mockResolvedValue(newsData);
};

beforeAll(() => {
  newsService();
});

afterAll(() => {
  fastify.close();
});

test('GET "/live"', async () => {
  const result = await fastify.inject({
    method: 'GET',
    url: '/live',
  });
  expect(result.statusCode).toEqual(200);
  expect(result.body).toEqual('I am up');
});

test('GET "/topHeadlines"', async () => {
  const result = await fastify.inject({
    method: 'GET',
    url: '/topHeadlines',
  });

  expect(result.statusCode).toEqual(200);
  expect(JSON.parse(result.body)).toEqual(newsData);
});

test('GET "/everything"', async () => {
  const result = await fastify.inject({
    method: 'GET',
    url: '/everything',
  });

  expect(result.statusCode).toEqual(200);
  expect(JSON.parse(result.body)).toEqual(newsData);
});
