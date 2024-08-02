const express = require('express');
const salesController = require('../controllers/salesController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSalesById);

// Protected routes
router.post('/', salesController.createSales);
router.put('/:id', salesController.updateSales);
router.delete('/:id', salesController.deleteSales);

module.exports = router;
