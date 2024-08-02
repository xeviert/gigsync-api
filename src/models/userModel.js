const db = require('../db/knex'); // Ensure the correct path to your Knex instance

const createUser = async ({ name, email, password, bio, city, role }) => {
  const newUser = await db('users').insert({ name, email, password, bio, city, role }).returning('*');
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

const getAllUsers = async () => {
  const users = await db('users').select('id', 'name', 'bio', 'city', 'role');
  return users;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers, // Export the new method
};
