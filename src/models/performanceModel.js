const db = require('../db/knex'); // Importing Knex instance

const createPerformance = async (data) => {
  const newPerformance = await db('performances').insert(data).returning('*');
  return newPerformance[0];
};

const getAllPerformances = async () => {
  const performances = await db('performances').select('*');
  return performances;
};

const getPerformanceById = async (id) => {
  const performance = await db('performances').where({ id }).first();
  return performance;
};

const updatePerformance = async (id, data) => {
  const updatedPerformance = await db('performances').where({ id }).update(data).returning('*');
  return updatedPerformance[0];
};

const deletePerformance = async (id) => {
  const deletedPerformance = await db('performances').where({ id }).del().returning('*');
  return deletedPerformance[0];
};

module.exports = {
  createPerformance,
  getAllPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
};
