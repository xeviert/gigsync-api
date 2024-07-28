const { NODE_ENV } = require('../config');

module.exports = function errorHandler(error, req, res, next) {
  const statusCode = error.status || 500;
  const response =
    NODE_ENV === 'production'
      ? { error: 'Server error' }
      : (console.error(error), { error: error.message, details: error });

  res.status(statusCode).json(response);
};
