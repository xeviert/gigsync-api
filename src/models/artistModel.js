const db = require('../db/knex'); // Importing Knex instance

const createArtist = async (data) => {
  const newArtist = await db('artists').insert(data).returning('*');
  return newArtist[0];
};

const getAllArtists = async () => {
  const artists = await db('artists').select('*');
  return artists;
};

const getArtistById = async (id) => {
  const artist = await db('artists').where({ id }).first();
  return artist;
};

const updateArtist = async (id, data) => {
  const updatedArtist = await db('artists').where({ id }).update(data).returning('*');
  return updatedArtist[0];
};

const deleteArtist = async (id) => {
  const deletedArtist = await db('artists').where({ id }).del().returning('*');
  return deletedArtist[0];
};

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
};
