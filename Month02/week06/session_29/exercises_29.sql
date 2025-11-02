create table books (
book_id serial primary key,
title varchar(255),
author varchar(150),
publish_year integer,
pages integer,
price integer
);


INSERT INTO books (title, author, publish_year, pages, price) VALUES
('The Secret History', 'Donna Tartt', 1992, 550, 48000),
('Dune', 'Frank Herbert', 1965, 412, 55000),
('1984', 'George Orwell', 1949, 328, 42000),
('Gone Girl', 'Gillian Flynn', 2012, 419, 39000),
('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 96, 25000);

select SUM(price) from books; 

select title, pages from books where pages > 400;

select title, publish_year from books order by publish_year asc limit 1;

select max(pages) from books;

select title, price from books where price < 40000 order by price asc;

select AVG(price) from books;

select title, publish_year from books where title like '%19%';

select title, publish_year from books where publish_year > 1960 and publish_year < 1990;

select title from books order by price desc limit 3;

select count(*) from books;













