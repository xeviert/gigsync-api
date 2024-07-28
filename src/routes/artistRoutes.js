const express = require('express');
const artistController = require('../controllers/artistController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);

// Protected routes
router.post('/', authMiddleware, artistController.createArtist);
router.put('/:id', authMiddleware, artistController.updateArtist);
router.delete('/:id', authMiddleware, artistController.deleteArtist);

module.exports = router;
