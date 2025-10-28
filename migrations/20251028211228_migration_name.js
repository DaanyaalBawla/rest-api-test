/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.raw('CREATE SCHEMA IF NOT EXISTS molloyeats;')
    knex.schema.withSchema('molloyEats').createTable('molloyEats', function (table){
         table.increments();
         table.string('name');
         table.string('description').setNullable();
         table.integer('Price').unsigned().notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
