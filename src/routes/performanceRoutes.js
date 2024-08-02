const express = require('express');
const performanceController = require('../controllers/performanceController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', performanceController.getAllPerformances);
router.get('/:id', performanceController.getPerformanceById);

// Protected routes
router.post('/', performanceController.createPerformance);
router.put('/:id', performanceController.updatePerformance);
router.delete('/:id', performanceController.deletePerformance);

module.exports = router;
