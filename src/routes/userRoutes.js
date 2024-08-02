const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// Protected routes
router.get('/', authMiddleware, userController.getAllUsers);
router.get('/profile', authMiddleware, userController.getProfile);

module.exports = router;