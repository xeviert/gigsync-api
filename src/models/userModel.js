const db = require('../db/knex'); // Importing Knex instance

const createUser = async ({ username, email, password }) => {
  const newUser = await db('users').insert({ email, password }).returning('*');
  return newUser[0];
};

const findUserByEmail = async (email) => {
  const user = await db('users').where({ email }).first();
  return user;
};

const findUserById = async (id) => {
  const user = await db('users').where({ id }).first();
  return user;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
