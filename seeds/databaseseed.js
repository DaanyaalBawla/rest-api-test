/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
menustr = JSON.stringify('menu.json')
menuparse = JSON.parse(menustr)
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex.raw('CREATE SCHEMA IF NOT EXISTS molloyeats;')
  knex.schema.withSchema('molloyeats').createTable('molloyfood', function (table){
        table.increments();
        table.string('name');
        table.string('description').setNullable();
        table.integer('Price').unsigned().notNullable(); 
      });
    await knex('molloyfood').insert(menuparse)
};
