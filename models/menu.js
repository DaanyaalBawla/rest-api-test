const { Model } = require('objection');
const menu = require('../routes/menu');
const knex = require('knexfile.js').devlopment
Model.knex(knex);
class Model extends menu {
    static get tableName() {
        return 'molloyeats'
    }
}
