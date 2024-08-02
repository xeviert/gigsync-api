const bcrypt = require('bcrypt');
const { createUser, findUserByEmail, findUserById, getAllUsers } = require('../models/userModel');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
  try {
    const { name, email, password, bio, city, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({ name, email, password: hashedPassword, bio, city, role });
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

    const userDetails = await findUserById(user.id);


    const token = generateToken(user.id);

    res.cookie('authToken', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: 'lax',
    });

    res.json({
      token,
      user: {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        bio: userDetails.bio,
        city: userDetails.city,
        role: userDetails.role,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie('authToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.getProfile = async (req, res) => {
  try {
    const user = await findUserById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};