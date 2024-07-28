// authMiddleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET, NODE_ENV } = require('../config');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    const errorResponse = NODE_ENV === 'production'
      ? { error: 'Authentication required' }
      : { error: 'Authentication required', details: 'No token provided' };

    return res.status(401).json(errorResponse);
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    const errorResponse = NODE_ENV === 'production'
      ? { error: 'Invalid token' }
      : { error: 'Invalid token', details: err.message };

    res.status(401).json(errorResponse);
  }
};

module.exports = authMiddleware;