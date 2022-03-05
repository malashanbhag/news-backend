/* eslint-disable global-require */
const fastify = require('fastify')({
  logger: true,
});
const fastifyEnv = require('fastify-env');

const schema = {
  type: 'object',
  required: ['X_API_KEY'],
  properties: {
    X_API_KEY: {
      type: 'string',
    },
  },
};
const options = {
  confKey: 'config',
  schema,
  dotenv: true,
  data: process.env,
};
const swagger = require('./config/swagger');

module.exports = fastify;

// eslint-disable-next-line func-names
(async function () {
  try {
    fastify.register(fastifyEnv, options);
    fastify.register(require('fastify-swagger'), swagger.options);
    fastify.register(require('./routes/newsapi'));

    fastify.listen(3000, (err, address) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }

      fastify.log.info(`Server listening on ${address}`);
    });

    fastify.ready((err) => {
      if (err) throw err;
      fastify.swagger();
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}());
