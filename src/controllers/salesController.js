const { createSales, getAllSales, getSalesById, updateSales, deleteSales } = require('../models/salesModel');

exports.createSales = async (req, res) => {
  try {
    const sales = await createSales(req.body);
    res.status(201).json(sales);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await getAllSales();
    res.json(sales);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSalesById = async (req, res) => {
  try {
    const sales = await getSalesById(req.params.id);
    if (!sales) {
      return res.status(404).json({ error: 'Sales data not found' });
    }
    res.json(sales);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSales = async (req, res) => {
  try {
    const sales = await updateSales(req.params.id, req.body);
    if (!sales) {
      return res.status(404).json({ error: 'Sales data not found' });
    }
    res.json(sales);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSales = async (req, res) => {
  try {
    const sales = await deleteSales(req.params.id);
    if (!sales) {
      return res.status(404).json({ error: 'Sales data not found' });
    }
    res.json({ message: 'Sales data deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
