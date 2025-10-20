-- exercises(1-19)


create table authors (
id serial primary key,
name varchar(100),
birth_year integer
); 

create table books (
id serial primary key,
title varchar(225),
publish_year integer,
price integer
);

insert into authors (name, birth_year)
values ('Agathe Christie', 1890),
('J.K Rowling', 1965),
('George Orwell', 1903);

insert into books (title, publish_year, price)
values ('And Then There Were None', 1939, 35000),
('Murder on the Orient Express', 1934, 32000),
('Harry Poter and the Sorcerers Stone', 1997, 45000),
('1984', 1949, 38000);

select * from books;

select * from authors;

select title, price from books;

select * from books where publish_year < '1950'

select * from books where price > '40000'

select * from books order by price desc;

select * from books order by price asc limit 1;

select * from books order by publish_year desc limit 2;


update books set price = '40000' where id = 4;

delete from authors where id = 3;

select * from books where title like '%Murder%'; 

delete from books where publish_year < 1940;

select count(id) from books;

select title from books order by price desc limit 1;

select * from authors where name like 'J%';

update books set price = '0' where publish_year > 1950; 
















