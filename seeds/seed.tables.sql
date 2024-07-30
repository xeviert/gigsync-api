INSERT INTO artists (name, genre, bio, created_at, updated_at) VALUES
('The Rolling Tones', 'Rock', 'A band known for their energetic rock performances and catchy tunes.', current_timestamp, current_timestamp),
('Electric Rockers', 'Rock', 'A high-voltage rock band with electrifying guitar solos and powerful vocals.', current_timestamp, current_timestamp),
('Thunderstruck', 'Rock', 'A rock band famous for their intense live shows and anthemic songs.', current_timestamp, current_timestamp),
('Blues Brothers', 'Blues', 'A soulful blues band with deep roots in the traditional blues sound.', current_timestamp, current_timestamp),
('Delta Blues Band', 'Blues', 'A group dedicated to preserving the authentic sounds of Delta blues.', current_timestamp, current_timestamp),
('The Blue Notes', 'Blues', 'A modern blues band blending traditional blues with contemporary influences.', current_timestamp, current_timestamp),
('Country Stars', 'Country', 'A band of country musicians bringing heartfelt lyrics and melodies to the stage.', current_timestamp, current_timestamp),
('Wild West', 'Country', 'A country band known for their storytelling and western-themed performances.', current_timestamp, current_timestamp),
('Nashville Nights', 'Country', 'A group of country artists from Nashville, famous for their smooth vocals and catchy tunes.', current_timestamp, current_timestamp),
('Honky Tonk Heroes', 'Country', 'A country band with a honky-tonk style, known for their lively performances.', current_timestamp, current_timestamp);

INSERT INTO events (name, date, venue_id, image_url) VALUES
('Rock Night at Warehouse Live', '2024-08-03', 1, ''),
('Jazz Evening at The Mohawk', '2024-08-04', 2, ''),
('Blues Bash at Antone''s Nightclub', '2024-08-10', 3, ''),
('Country Fest at Stubb''s BBQ', '2024-08-11', 4, ''),
('Indie Rock Fest at The Mohawk', '2024-08-17', 2, ''),
('Blues Legends at Antone''s Nightclub', '2024-08-18', 3, ''),
('Summer Jam at Stubb''s BBQ', '2024-08-24', 4, ''),
('Alternative Rock Night at The Mohawk', '2024-08-25', 2, ''),
('Blues and BBQ at Antone''s Nightclub', '2024-08-31', 3, ''),
('Acoustic Evening at Stubb''s BBQ', '2024-08-30', 4, ''),
('Rock and Roll Night at The Mohawk', '2024-08-23', 2, ''),
('Folk Fest at Antone''s Nightclub', '2024-08-02', 3, '');

INSERT INTO bookings (event_id, artist_id, status, created_at, updated_at) VALUES
(1, 1, 'confirmed', current_timestamp, current_timestamp),
(5, 2, 'confirmed', current_timestamp, current_timestamp),
(8, 3, 'confirmed', current_timestamp, current_timestamp), 
(11, 1, 'confirmed', current_timestamp, current_timestamp),
(3, 4, 'confirmed', current_timestamp, current_timestamp),
(6, 5, 'confirmed', current_timestamp, current_timestamp), 
(9, 6, 'confirmed', current_timestamp, current_timestamp), 
(12, 5, 'confirmed', current_timestamp, current_timestamp),
(4, 7, 'confirmed', current_timestamp, current_timestamp),
(7, 8, 'confirmed', current_timestamp, current_timestamp),
(10, 9, 'confirmed', current_timestamp, current_timestamp);

INSERT INTO performances (event_id, tickets_sold, tickets_unsold, revenue, notes, created_at, updated_at) VALUES
(1, 150, 50, 7500, 'Great turnout, high energy.', current_timestamp, current_timestamp),
(2, 200, 0, 10000, 'Sold out show!', current_timestamp, current_timestamp),
(3, 120, 80, 6000, 'Decent attendance, room for improvement.', current_timestamp, current_timestamp),
(4, 180, 20, 9000, 'Nearly sold out, great vibes.', current_timestamp, current_timestamp),
(5, 170, 30, 8500, 'Well received, good attendance.', current_timestamp, current_timestamp),
(6, 130, 70, 6500, 'Average turnout, positive feedback.', current_timestamp, current_timestamp),
(7, 190, 10, 9500, 'Excellent attendance, very popular event.', current_timestamp, current_timestamp),
(8, 160, 40, 8000, 'Good crowd, engaged audience.', current_timestamp, current_timestamp),
(9, 140, 60, 7000, 'Average performance, crowd enjoyed it.', current_timestamp, current_timestamp),
(10, 175, 25, 8750, 'Well attended, positive atmosphere.', current_timestamp, current_timestamp),
(11, 185, 15, 9250, 'High energy, great audience response.', current_timestamp, current_timestamp),
(12, 150, 50, 7500, 'Good turnout, well organized.', current_timestamp, current_timestamp);

INSERT INTO sales (event_id, total_sales, food_sales, beverage_sales, created_at, updated_at) VALUES
(1, 12000, 5000, 7000, current_timestamp, current_timestamp),
(2, 15000, 6000, 9000, current_timestamp, current_timestamp),
(3, 9000, 4000, 5000, current_timestamp, current_timestamp),
(4, 14000, 6000, 8000, current_timestamp, current_timestamp),
(5, 11000, 4500, 6500, current_timestamp, current_timestamp),
(6, 9500, 4000, 5500, current_timestamp, current_timestamp),
(7, 13500, 5500, 8000, current_timestamp, current_timestamp),
(8, 11500, 5000, 6500, current_timestamp, current_timestamp),
(9, 10500, 4500, 6000, current_timestamp, current_timestamp),
(10, 12500, 5000, 7000, current_timestamp, current_timestamp),
(11, 13000, 5500, 7500, current_timestamp, current_timestamp),
(12, 10000, 4500, 5500, current_timestamp, current_timestamp);

INSERT INTO artist_availability (artist_id, available_date, created_at, updated_at) VALUES
(1, '2024-08-01', current_timestamp, current_timestamp),
(1, '2024-08-08', current_timestamp, current_timestamp),
(2, '2024-08-02', current_timestamp, current_timestamp),
(2, '2024-08-09', current_timestamp, current_timestamp),
(3, '2024-08-03', current_timestamp, current_timestamp),
(3, '2024-08-10', current_timestamp, current_timestamp),
(4, '2024-08-04', current_timestamp, current_timestamp),
(4, '2024-08-11', current_timestamp, current_timestamp),
(5, '2024-08-05', current_timestamp, current_timestamp),
(5, '2024-08-12', current_timestamp, current_timestamp),
(6, '2024-08-06', current_timestamp, current_timestamp),
(6, '2024-08-13', current_timestamp, current_timestamp),
(7, '2024-08-07', current_timestamp, current_timestamp),
(7, '2024-08-14', current_timestamp, current_timestamp),
(8, '2024-08-15', current_timestamp, current_timestamp),
(8, '2024-08-22', current_timestamp, current_timestamp),
(9, '2024-08-16', current_timestamp, current_timestamp),
(9, '2024-08-23', current_timestamp, current_timestamp),
(10, '2024-08-17', current_timestamp, current_timestamp),
(10, '2024-08-24', current_timestamp, current_timestamp);
