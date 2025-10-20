CREATE TABLE movies(
id integer primary key autoincrement,
title varchar(50),
director varchar(50),
release_year integer,
rating integer
);

INSERT INTO movies (title, director, release_year, rating)
VALUES ('The Dark Knight', 'Christopher Nolan', '2008', '9.0'),
('Inception', 'Christopher Nolan', '2010', '8.8'),
('Pulp Fiction', 'Quentin Tarantino', '1994', '8.9'),
('Forrest Gump', 'Robert Zemeckis', '1994', '8.8'),
('The Godfather', 'Francis Ford Coppola', '1972', '9.2');

SELECT * FROM movies;

select title, release_year from movies where release_year > '2000';

SELECT title, rating FROM movies order by rating DESC limit 3;

select * from movies where director = 'Christopher Nolan';