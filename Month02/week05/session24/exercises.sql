-- 1
CREATE TABLE authors (
id integer primary key AUTOINCREMENT,
name text,
birth_year integer
);

-- 2
CREATE TABLE books (
id integer primary key AUTOINCREMENT,
title text,
publish_year integer,
price integer
);

-- 3
CREATE TABLE customers (
id integer primary key AUTOINCREMENT,
name varchar(100),
email varchar(100),
city varchar(50)
);

-- 4
INSERT INTO authors (name, birth_year)
VALUES ('Agatha Christie', '1980'),
('J.K.Rowling', '1965');

-- 5
INSERT INTO books (title, publish_year, price)
VALUES ('And Then There Were None', '1939', '35000'),
('Murder on the Orient Express', '1934', '32000'),
("Harry Poter and the Sorcerer's Stone", '1997', '45000');

-- 6
INSERT INTO customers (name, email, city)
VALUES ('Dorj', 'Dorj@gmail.com', 'Ulaanbaatar'),
('Saraa', 'saraa@email.com', 'Erdenet');

-- 7
SELECT * FROM books;

-- 8
SELECT title, price from books;

-- 9
SELECT * FROM authors WHERE id = '2'

-- 10
SELECT * FROM authors WHERE birth_year = '1980' 

-- 11
SELECT * FROM customers where city = 'Ulaanbaatar'

-- 12
SELECT * FROM books where price > '40000'

-- 13
SELECT * FROM books ORDER BY title asc;

-- 14
SELECT * FROM authors order by birth_year desc;

-- 15
SELECT * FROM books order by price desc limit 1;

--16
SELECT * FROM customers limit 2;

-- 17
SELECT * FROM books where title like '%xpress';

-- 18
SELECT * FROM books where publish_year < '1990' and publish_year > '2000';

-- 19
SELECT * FROM books order by price ASC limit 2;

-- 20
SELECT * FROM customers WHERE city like 'E%';


















