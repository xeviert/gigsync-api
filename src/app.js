const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const authMiddleware = require('./middlewares/authMiddleware')
const errorHandler = require('./middlewares/errorMiddleware')
const notFoundHandler = require('./middlewares/notFoundHandler')
const { JWT_SECRET, CLIENT_URL } = require('./config'); // Importing configuration

// Initialize express app
const app = express();

// Middleware setup
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
})); app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session and authentication
app.use(session({ secret: JWT_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); // Initializes Passport.js for authentication

// Routes
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const artistRoutes = require('./routes/artistRoutes');
const eventRoutes = require('./routes/eventRoutes');

app.use('/api/users', userRoutes);
app.use('/api/bookings', authMiddleware, bookingRoutes); // Protecting booking routes
app.use('/api/artists', authMiddleware, artistRoutes); // Protecting artist routes
app.use('/api/events', authMiddleware, eventRoutes); // Protecting event routes

// Handle 404 errors
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
