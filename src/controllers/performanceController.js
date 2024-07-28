const { createPerformance, getAllPerformances, getPerformanceById, updatePerformance, deletePerformance } = require('../models/performanceModel');

exports.createPerformance = async (req, res) => {
  try {
    const performance = await createPerformance(req.body);
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPerformances = async (req, res) => {
  try {
    const performances = await getAllPerformances();
    res.json(performances);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPerformanceById = async (req, res) => {
  try {
    const performance = await getPerformanceById(req.params.id);
    if (!performance) {
      return res.status(404).json({ error: 'Performance data not found' });
    }
    res.json(performance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePerformance = async (req, res) => {
  try {
    const performance = await updatePerformance(req.params.id, req.body);
    if (!performance) {
      return res.status(404).json({ error: 'Performance data not found' });
    }
    res.json(performance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePerformance = async (req, res) => {
  try {
    const performance = await deletePerformance(req.params.id);
    if (!performance) {
      return res.status(404).json({ error: 'Performance data not found' });
    }
    res.json({ message: 'Performance data deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
