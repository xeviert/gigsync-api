CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio TEXT,
    city VARCHAR(255),
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    venue VARCHAR(255) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) NOT NULL,
    artist_id INTEGER REFERENCES artists(id) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE performances (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) NOT NULL,
    artist_id INTEGER REFERENCES artists(id) NOT NULL,
    performance_data JSONB,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) NOT NULL,
    total_sales NUMERIC NOT NULL,
    food_sales NUMERIC NOT NULL,
    beverage_sales NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE artist_availability (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER REFERENCES artists(id) NOT NULL,
    available_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp,
    UNIQUE(artist_id, available_date)
);
