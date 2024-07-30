const bcrypt = require('bcrypt');
const { createUser, findUserByEmail, findUserById } = require('../models/userModel');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({ username, email, password: hashedPassword });
    const token = generateToken(newUser.id);
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await findUserById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
