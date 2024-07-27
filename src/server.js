// server.js
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const app = require('./app'); // Importing app configuration
const { PORT } = require('./config'); // Importing configuration variables
const db = require('./db/knex'); // Importing Knex configuration

dotenv.config(); // Load environment variables

// Initialize the HTTP server with the express app
const server = http.createServer(app);

// Initialize Socket.IO for real-time updates
const io = socketIo(server);
app.set('io', io); // Make io accessible in other files

// Test database connection
db.raw('SELECT 1')
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Database connection error:', err.stack);
  });

// Make the Knex instance available in app
app.set('db', db);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
