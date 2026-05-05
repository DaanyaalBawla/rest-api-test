/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const menuJson = require('./menu.json')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('molloyeats.menu').del()
    await knex('molloyeats.menu').insert(menuJson)
};
