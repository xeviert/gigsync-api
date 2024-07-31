const db = require('../db/knex');

const createSales = async (data) => {
  const newSales = await db('sales').insert(data).returning('*');
  return newSales[0];
};

const getAllSales = async () => {
  const sales = await db('sales').select('*');
  return sales;
};

const getSalesById = async (id) => {
  const sales = await db('sales').where({ id }).first();
  return sales;
};

const updateSales = async (id, data) => {
  const updatedSales = await db('sales').where({ id }).update(data).returning('*');
  return updatedSales[0];
};

const deleteSales = async (id) => {
  const deletedSales = await db('sales').where({ id }).del().returning('*');
  return deletedSales[0];
};

module.exports = {
  createSales,
  getAllSales,
  getSalesById,
  updateSales,
  deleteSales,
};
