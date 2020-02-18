-- Create user table
CREATE TABLE helo_user (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  hash TEXT NOT NULL
);

-- Create posts table (one user-many posts)
CREATE TABLE posts (
post_id SERIAL NOT NULL,
title VARCHAR(100) NOT NULL,
img TEXT,
content VARCHAR(500) NOT NULL,
user_id INTEGER NOT NULL REFERENCES helo_user(user_id)
)

-- Get all posts (join)
SELECT p.*, hu.username FROM posts p
INNER JOIN helo_user hu
ON p.user_id = hu.user_id;

-- Search posts by title (join)
SELECT p.*, hu.username FROM posts p
INNER JOIN helo_user hu
ON p.user_id = hu.user_id
WHERE p.title ILIKE $1;