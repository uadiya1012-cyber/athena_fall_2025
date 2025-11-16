--1
select c.first_name , c.last_name , count(r.rental_id) as rental_count
from customer c 
join rental r on c.customer_id = r.customer_id 
group by c.customer_id, c.first_name , c.last_name
having count(r.rental_id) > 30
order by rental_count desc;

--2
select c.first_name , c.last_name 
from customer c
join address a on c.address_id = a.address_id 
join city c2 on a.city_id = c2.city_id 
join country c3 on c2.country_id = c3.country_id 
where c3.country = 'Canada';

select first_name, last_name
from customer
where address_id in (
	select address_id from address where city_id in (
		select city_id from city where country_id in (
			select country_id from country where country = 'Canada'
		)
	)
);

--3


select avg(customer_total) as average_customer_spending
from (
    select c.customer_id, sum(p.amount) as customer_total
    from customer c
    join payment p on c.customer_id = p.customer_id
    group by c.customer_id
);


--4

select f.title
from film f
where not exists (
	select f.film_id from inventory i join rental r 
	on i.inventory_id = r.inventory_id
	)


select f.title
from film f 
join inventory i on f.film_id = i.film_id 
join rental r on i.inventory_id = r.inventory_id 
where f.title = 'not exists'


--5

with CategoryRevenue as (
	select c.name, sum(p.amount) as total_revenue from category c 
	join film_category fc on c.category_id = fc.category_id 
	join film f on fc.film_id = f.film_id 
	join inventory i on f.film_id = i.film_id 
	join rental r on i.inventory_id = r.inventory_id 
	join payment p on r.rental_id = p.rental_id
	group by c.name	
)
select name, total_revenue from CategoryRevenue 
order by total_revenue desc limit 1;