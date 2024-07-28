const { createArtist, getAllArtists, getArtistById, updateArtist, deleteArtist } = require('../models/artistModel');

exports.createArtist = async (req, res) => {
  try {
    const artist = await createArtist(req.body);
    res.status(201).json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllArtists = async (req, res) => {
  try {
    const artists = await getAllArtists();
    res.json(artists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getArtistById = async (req, res) => {
  try {
    const artist = await getArtistById(req.params.id);
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateArtist = async (req, res) => {
  try {
    const artist = await updateArtist(req.params.id, req.body);
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteArtist = async (req, res) => {
  try {
    const artist = await deleteArtist(req.params.id);
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.json({ message: 'Artist deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
