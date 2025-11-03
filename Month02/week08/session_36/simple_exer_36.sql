
-- SQL-ийн Энгийн 5 Дасгал


--1

create table inventory (
	product_id serial primary key,
	name varchar(100),
	stock_quantity integer,
	is_expired boolean
);

--2

insert into inventory (name, stock_quantity, is_expired)
values ('milk', 50, false),
('chicken', 120, false),
('bread', 30, true);

--3

select sum(stock_quantity ) from inventory;

--4

select name, stock_quantity from inventory 
where is_expired order by is_expired = true;  

--5

select name, stock_quantity from inventory 
order by stock_quantity desc limit 2;







