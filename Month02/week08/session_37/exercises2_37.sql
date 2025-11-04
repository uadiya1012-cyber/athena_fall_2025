--1

select a.first_name , a.last_name, f.title  from actor a
join film_actor fa on a.actor_id = fa.actor_id
join film f on fa.film_id = f.film_id
group by a.first_name, a.last_name, f.title 
order by a.first_name asc;


--2

select c.first_name , c.last_name , sum(p.amount) as total_spent from customer c 
join payment p on c.customer_id = p.customer_id
group by c.first_name , c.last_name 
order by total_spent desc limit 5;


--3

select c.first_name , c.last_name, count(r.rental_id) as rental_count 
from customer c join rental r on c.customer_id = r.customer_id
group by c.first_name , c.last_name 
having count(r.rental_id )  > 30 order by rental_count desc;

--4

select f.title  
from film f join film_category fc on f.film_id = fc.film_id 
join category c on fc.category_id = c.category_id 
where c."name" = 'Action';

select f.title 
from film f 
where f.film_id in (
select fc.film_id from film_category fc 
where fc.category_id =(
select c.category_id  from category c 
where c."name" = 'Action' ))


--5

select f.title , f.rental_rate, 
case
	when f.rental_rate  = 0.99 then 'Хямд'
	when f.rental_rate  = 2.99 then 'Стандарт'
	when f.rental_rate  = 4.99 then 'Дээд зэрэглэлийн'
	else 'Бусад'
end as "үнийн ангилал"
from film f; 









