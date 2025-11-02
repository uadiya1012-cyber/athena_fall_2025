--1
select title, rental_rate  from film where rental_rate = 4.99;

--2
select distinct length from film;

--3
select first_name, last_name, create_date from customer order by create_date desc limit 5;

--4
select count(*) from film where rating = 'G';

--5
select
f.title, c."name" as category_name
from
film f
inner join
film_category fc 
on 
f.film_id  = fc.film_id 
inner join 
category c
on c.category_id = fc.category_id 
where c."name" = 'Comedy'; 

--6
select AVG(rental_rate) from film;

--7
select title, length from film where length < 100 or length > 150;

--8
select count(distinct amount) as customer_paid_in_2006
from payment where payment_date >= '2006-01-01' and payment_date < '2007-01-01';

--9
select payment_id, amount from payment where amount in (5.99, 9.99);

--10
select first_name, last_name from actor where first_name like 'A%';











