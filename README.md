

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


CLEAN UP COMMENTS

User Routes
POST /api/users/register: Register a new user.
POST /api/users/login: Login a user and issue a JWT.
GET /api/users/profile: Get the logged-in user's profile (protected).

Booking Routes
GET /api/bookings: Get a list of all bookings (protected).
POST /api/bookings: Create a new booking (protected).
GET /api/bookings/:id: Get details of a specific booking (protected).
PUT /api/bookings/:id: Update a booking (protected).
DELETE /api/bookings/:id: Delete a booking (protected).

Artist Routes
GET /api/artists: Get a list of all artists.
POST /api/artists: Add a new artist (protected).
GET /api/artists/:id: Get details of a specific artist.
PUT /api/artists/:id: Update an artist (protected).
DELETE /api/artists/:id: Delete an artist (protected).

Event Routes
GET /api/events: Get a list of all events.
POST /api/events: Create a new event (protected).
GET /api/events/:id: Get details of a specific event.
PUT /api/events/:id: Update an event (protected).
DELETE /api/events/:id: Delete an event (protected).

Performance Data Routes
GET /api/performances: Get performance data for all events.
POST /api/performances: Add performance data for an event (protected).
GET /api/performances/:id: Get performance data for a specific event.
PUT /api/performances/:id: Update performance data for an event (protected).
DELETE /api/performances/:id: Delete performance data for an event (protected).

Food and Beverage Sales Routes
GET /api/sales: Get all food and beverage sales data.
POST /api/sales: Add sales data for an event (protected).
GET /api/sales/:id: Get sales data for a specific event.
PUT /api/sales/:id: Update sales data for an event (protected).
DELETE /api/sales/:id: Delete sales data for an event (protected).