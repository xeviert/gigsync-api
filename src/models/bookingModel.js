const db = require('../db/knex');

const createBooking = async (data) => {
  const newBooking = await db('bookings').insert(data).returning('*');
  return newBooking[0];
};

const getAllBookings = async () => {
  const bookings = await db('bookings').select('*');
  return bookings;
};

const getBookingById = async (id) => {
  const booking = await db('bookings').where({ id }).first();
  return booking;
};

const updateBooking = async (id, data) => {
  const updatedBooking = await db('bookings').where({ id }).update(data).returning('*');
  return updatedBooking[0];
};

const deleteBooking = async (id) => {
  const deletedBooking = await db('bookings').where({ id }).del().returning('*');
  return deletedBooking[0];
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
