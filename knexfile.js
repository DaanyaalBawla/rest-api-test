// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const env = require('dotenv').config()
module.exports = {

  development: {
    client: 'cockroachdb',
    connection: `postgresql://daanyaal:${process.env.PASSWORD}@joyous-cougar-26171.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full`,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
