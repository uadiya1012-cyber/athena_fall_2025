-- dvd_rental sql exercises

--1

select c."name" , sum(p.amount) as total_revenue
from category c join film_category fc
on c.category_id = fc.category_id 
join film f on fc.film_id = f.film_id
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
join payment p on r.rental_id  = p.rental_id  
group by c."name" 

--2

select first_name , last_name from actor where actor_id not in 
(select distinct a.actor_id 
from actor a join film_actor fa on a.actor_id = fa.actor_id 
join film_category fc on fa.film_id = fc.film_id 
join category c on fc.category_id = c.category_id
where c."name" = 'Horror')

--3

select s.first_name, s.last_name,
date_trunc('month', r.rental_date) as rental_month,
count(r.rental_id) as total_rentals
from staff s join rental r on s.staff_id = r.staff_id
group by s.staff_id, s.first_name, s.last_name, date_trunc('month', r.rental_date)
order by s.first_name, s.last_name, rental_month;

--4

select c1.first_name as customer_1, c2.first_name as customer_2, c.city 
from customer c1 
join address a on c1.address_id = a.address_id 
join city c on a.city_id = c.city_id
join address a2 on c.city_id = a2.city_id 
join customer c2 on a2.address_id = c2.address_id
where c1.customer_id != c2.customer_id 
order by c.city ;



--5

select c."name" , f.title , count(r.rental_id )
from category c join film_category fc on c.category_id = fc.category_id 
join film f on fc.film_id = f.film_id
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
group by c."name" , f.title ;















