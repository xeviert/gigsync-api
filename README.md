# Live Music Booking CRM - Backend

This repository contains the backend server for the Live Music Booking CRM project. The server is built with Node.js, Express, and PostgreSQL, and it includes APIs for managing users, events, bookings, performances, and sales.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the necessary dependencies:

```sh
git clone https://github.com/xeviert/gigsync-api.git
cd live-music-booking-crm
npm install
```

### Environment Variables

Create a .env file in the root directory and add the following environment variables:

        PORT=8080
        NODE_ENV=development
        DATABASE_URL=postgresql://username:password@localhost:5432/gigsync-db
        JWT_SECRET=your_jwt_secret
        JWT_EXPIRY=3h

Replace username, password, and your_jwt_secret with your PostgreSQL credentials and a secret key for JWT.

### Database Setup

1. Create the Database:
```sh
psql -U your_username -c "CREATE DATABASE gigsync-db;"
```

2. Run Migrations:
```sh
npx knex migrate:latest
```

3. Seed the Database (optional):
```sh
npx knex seed:run
```

### Running the Server
Start the development server:

```sh
npm run dev
```
The server will start on http://localhost:8080.


## API ENDPOINTS

```
User Routes
POST /api/users/register: Register a new user
POST /api/users/login: Login a user
GET /api/users/profile: Get user profile (protected)

Event Routes
GET /api/events: Get all events
POST /api/events: Create a new event (protected)
GET /api/events/:id: Get a specific event
PUT /api/events/:id: Update an event (protected)
DELETE /api/events/:id: Delete an event (protected)

Booking Routes
GET /api/bookings: Get all bookings (protected)
POST /api/bookings: Create a new booking (protected)
GET /api/bookings/:id: Get a specific booking (protected)
PUT /api/bookings/:id: Update a booking (protected)
DELETE /api/bookings/:id: Delete a booking (protected)

Performance Routes
GET /api/performances: Get all performance data
POST /api/performances: Add performance data for an event (protected)
GET /api/performances/:id: Get performance data for a specific event
PUT /api/performances/:id: Update performance data for an event (protected)
DELETE /api/performances/:id: Delete performance data for an event (protected)

Sales Routes
GET /api/sales: Get all sales data
POST /api/sales: Add sales data for an event (protected)
GET /api/sales/:id: Get sales data for a specific event
PUT /api/sales/:id: Update sales data for an event (protected)
DELETE /api/sales/:id: Delete sales data for an event (protected)
```

## Folder Structure

      root-directory/
      │
      ├── src/
      │   ├── controllers/
      │   │   ├── userController.js
      │   │   ├── bookingController.js
      │   │   ├── artistController.js
      │   │   ├── eventController.js
      │   │   ├── performanceController.js
      │   │   └── salesController.js
      │   ├── db/
      │   │   └── knex.js
      │   ├── middlewares/
      │   │   ├── authMiddleware.js
      │   │   └── errorMiddleware.js
      │   ├── models/
      │   │   ├── userModel.js
      │   │   ├── bookingModel.js
      │   │   ├── artistModel.js
      │   │   ├── eventModel.js
      │   │   ├── performanceModel.js
      │   │   └── salesModel.js
      │   ├── routes/
      │   │   ├── userRoutes.js
      │   │   ├── bookingRoutes.js
      │   │   ├── artistRoutes.js
      │   │   ├── eventRoutes.js
      │   │   ├── performanceRoutes.js
      │   │   └── salesRoutes.js
      │   ├── utils/
      │   │   ├── jwtUtils.js
      │   │   └── otherUtils.js
      │   ├── app.js
      │   ├── config.js
      │   └── server.js
      │
      ├── .env
      ├── package.json
      └── README.md

### Contributing
Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.