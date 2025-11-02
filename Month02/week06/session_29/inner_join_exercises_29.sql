-- sql inner join exercises (dvd_rental)

--1
select 
f.title, c."name" as category_name
from
film f 
inner join
category c 
on 
f.film_id = c.category_id;

--2
select
f.title, a.first_name, a.last_name
from
film f
inner join
actor a  
on 
f.film_id  = a.actor_id 
inner join 
category c
on c.category_id = a.actor_id  
where a.first_name = 'Nick';

--3
SELECT c.name, COUNT(f.film_id) AS film_count
FROM category c
INNER JOIN film_category fc ON c.category_id = fc.category_id
inner join film f on f.film_id = c.category_id 
GROUP BY c.name
ORDER BY film_count DESC
LIMIT 1;

--4
select f.title, c."name" as category_name
from film f 
inner join category c on c.category_id = f.film_id 
inner join film_category fc on fc.category_id = c.category_id 
where f.length > 180;

--5
select count(*) as total_action_films
from film f 
inner join category c on c.category_id = f.film_id 
where c."name" = 'Action';


--6
select a.first_name, a.last_name, count(fa.actor_id ) as film_count
from actor a 
inner join film_actor fa on fa.actor_id = a.actor_id 
group by a.actor_id, a.first_name, a.last_name 
order by film_count desc limit 1;