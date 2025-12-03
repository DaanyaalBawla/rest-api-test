const { Model } = require('objection');
const menu = require('../routes/menu');
const { description } = require('@hapi/joi/lib/base');
const knex = require('knexfile.js').devlopment
Model.knex(knex);
class Model extends menu {
    static get tableName() {
        return 'molloyeats'
    }
    static get jsonSchema() {
        return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'string' },
        name: { type: 'string'},
        price: { type: 'number' },
        description: {type: 'string'}
      }
    }
    }
}
