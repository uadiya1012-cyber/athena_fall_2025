select
c.first_name, c.last_name, p.amount
from
customer c 
inner join 
payment p 
on c.customer_id = p.customer_id;

select * from city;
select * from  country;

-- foreign key constraint
-- city iig ooriin ulstai ni haruulna uu

select *
from city
inner join 
country
on 
city.country_id = country.country_id;


-- city zuwhun ner uls haruul

select city.city, country.country
from
city
inner join country
on
city.country_id = country.country_id;

-- exercises

-- 1
select
actor.first_name, actor.last_name, film.title
from 
actor
inner join 
film_actor
on actor.actor_id = film_actor.actor_id
inner join
film
on film_actor.film_id = film.film_id;

-- 2

select
f.title, c."name" 
from 
film f 
inner join
film_category fc
on f.film_id = fc.film_id
inner join
category c 
on fc.category_id = c.category_id 

-- 3

select
c.first_name, c.last_name, p.amount
from
customer c 
inner join 
payment p 
on c.customer_id = p.customer_id;

-- 4
select
c.first_name, c.last_name, sum(p.amount) as total
from
customer c 
inner join 
payment p 
on c.customer_id = p.customer_id
group by c.first_name, c.last_name
order by total desc;




-- relationshop үүсгэх

create table authors (
	author_id serial primary key,
	author_name varchar(100) not null
);

create table books (
	book_id serial primary key,
	title varchar(255) not null,
	
	-- foreign key constraint
	author_id integer references authors(author_id)
);

select * from authors a ;

insert into authors (author_name)
values 
('J.K. Rowling');

-- try to add entry into books table

insert into books (title, author_id)
values ('Harry Potter and the Sorcerers Stone', 1);

select * from books;








































