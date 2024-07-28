const { NODE_ENV } = require('../config');

module.exports = function notFoundHandler(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;

  const response =
    NODE_ENV === 'production'
      ? { error: 'Not Found' }
      : { error: error.message, details: 'The requested resource could not be found' };

  res.status(error.status).json(response);
};
