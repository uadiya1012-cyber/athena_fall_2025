-- dvd_rental sql exercises

--1
select a.first_name , a.last_name 
from actor a order by a.last_name asc;

--2
select title, rating from film where rating = 'PG-13'; 

--3
select title, length from film order by film.length asc limit 5;

--4
select count(customer_id) from customer;

--5
select name from category where name like 'Action';

--6
select rating, count(film_id) as number_of_film 
from  film group by rating;  

--7
select c.customer_id, sum(p.amount) as total_paid from customer c
inner join payment p on c.customer_id = p.customer_id
group by c.customer_id 
order by total_paid desc limit 5;

--8
select f.title , c."name" 
from film f 
inner join film_category fc 
on f.film_id = fc.film_id
inner join category c 
on fc.category_id = c.category_id
where f.title = 'Academy Dinosaur'; 

--9
select c.first_name , c.last_name , c3.country 
from customer c 
join address a 
on c.address_id = a.address_id
join city c2 
on a.city_id = c2.city_id
join country c3 
on c2.country_id = c3.country_id 
where c3.country = 'Canada';

--10
select customer_id, count(*) as total_rentals
from rental
group by customer_id
having count(*) > 40
order by total_rentals desc limit 3;

--11
select c."name" , sum(p.amount ) as total_revenue
from category c 
join film_category fc 
on c.category_id = fc.category_id 
join film f 
on fc.film_id = f.film_id 
join inventory i 
on f.film_id = i.film_id
join rental r 
on i.inventory_id = r.inventory_id 
join payment p 
on r.rental_id = p.rental_id 
group by c."name"
order by total_revenue desc limit 5;

--12
select c.first_name , c.last_name 
from customer c 
left join rental r 
on c.customer_id = r.customer_id
where r.rental_id is null;

--13
select a.first_name , a.last_name , f.title 
from actor a 
full join film_actor fa 
on a.actor_id  = fa.actor_id
full join film f 
on fa.film_id = f.film_id 
order by a.actor_id , f.film_id ;

--14
select
title, rental_rate 
from film 
where rental_rate >
	(select avg(rental_rate) from film);

--15
select distinct c.name
from category c 
join film_category fc on c.category_id = fc.category_id 
join film f on fc.film_id = f.film_id 
join film_actor fa on f.film_id = fa.film_id 
join actor a on fa.actor_id = a.actor_id 
where a.first_name = 'Penelope' and a.last_name = 'Guiness'
order by c.name;