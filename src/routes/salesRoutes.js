const express = require('express');
const salesController = require('../controllers/salesController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSalesById);

// Protected routes
router.post('/', authMiddleware, salesController.createSales);
router.put('/:id', authMiddleware, salesController.updateSales);
router.delete('/:id', authMiddleware, salesController.deleteSales);

module.exports = router;
