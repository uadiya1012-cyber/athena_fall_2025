--1
select first_name, last_name from customer c
where c.customer_id in (
	select customer_id 
	from payment
	where amount > 10
);

select customer_id from payment where amount > 10;

--2
select
count(title)
from film 
where rental_rate >
	(select avg(rental_rate) from film);

--3
select f.title, f.rental_rate, c.name as category
from film f 
join film_category fc on f.film_id = fc.film_id
join category c on fc.category_id = c.category_id 
where f.rental_rate > (
	select avg(f2.rental_rate)
	from film f2 
	join film_category fc2 on f2.film_id = fc2.film_id
	where fc2.category_id = fc.category_id 
);

--4
select
customer_id, avg_amount
from (
	select customer_id , avg(amount) as avg_amount
	from payment 
	group by customer_id 
) as sub
where avg_amount > (select avg(amount) from payment);












