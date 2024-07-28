const db = require('../db/knex'); // Importing Knex instance

const createEvent = async (data) => {
  const newEvent = await db('events').insert(data).returning('*');
  return newEvent[0];
};

const getAllEvents = async () => {
  const events = await db('events').select('*');
  return events;
};

const getEventById = async (id) => {
  const event = await db('events').where({ id }).first();
  return event;
};

const updateEvent = async (id, data) => {
  const updatedEvent = await db('events').where({ id }).update(data).returning('*');
  return updatedEvent[0];
};

const deleteEvent = async (id) => {
  const deletedEvent = await db('events').where({ id }).del().returning('*');
  return deletedEvent[0];
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
