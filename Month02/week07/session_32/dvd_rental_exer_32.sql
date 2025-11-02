-- exercises
--1
select c.first_name , c.last_name , c.email  
from customer c order by c.first_name asc;

--2
select f.title , f.length 
from film f order by f.length desc limit 10;

--3
select f.title , f.rating 
from film f where f.rating = 'R';

--4
select c.first_name , c.last_name , c.create_date 
from customer c where c.create_date = '2006-02-14';

--5
select a.first_name , a.last_name 
from actor a where a.first_name like '%SAM';

--6
select count(f.film_id )
from film f;

--7
select f.rating , count(f.film_id ) as number_of_film
from film f group by f.rating ;

--8

select p.customer_id, sum(p.amount ) as total_paid
from payment p group by p.customer_id order by total_paid desc limit 10;

--9
select r.customer_id, r.rental_id 
from rental r group by r.rental_id   
having r.rental_id  > 30; 

--10
select 
s.store_id , sum(p.amount )
from payment p
join staff s   
on p.staff_id = s.staff_id
group by s.store_id ;

--11
select
f.title , c."name" 
from film f 
inner join 
film_category fc 
on f.film_id = fc.film_id 
inner join
category c 
on c.category_id = fc.film_id
where f.title  = 'Academy Dinosaur';

--12
select 
a.first_name , a.last_name , count(fa.film_id )
from actor a 
inner join film_actor fa 
on a.actor_id = fa.actor_id 
group by a.actor_id ;

--13

select 
c.first_name , c.last_name , c3.country 
from customer c 
join address a 
on c.address_id = a.address_id 
join city c2 
on a.city_id = c2.city_id 
join country c3 
on c2.country_id = c3.country_id
where c3.country = 'Canada';

--14

select
c.first_name , r.rental_id 
from customer c 
left join rental r 
on c.customer_id = r.customer_id 
where r.rental_id is null;


--15

select 
i.inventory_id , r.rental_id 
from inventory i 
right join rental r 
on i.inventory_id = r.inventory_id
where r.rental_id  is null;

--16
select 
c.first_name , c.last_name, count(r.rental_id )
from customer c 
join rental r 
on c.customer_id = r.customer_id 
join inventory i 
on r.inventory_id = i.inventory_id 
join film f 
on i.film_id = f.film_id 
join film_category fc 
on f.film_id = fc.film_id 
join category c2 
on fc.category_id = c2.category_id 
where c2.name = 'Action'
group by c.first_name , c.last_name
having count(r.rental_id) > 5;

--17

select
c.first_name , c.last_name , r.rental_id 
from 
customer c 
full join rental r 
on c.customer_id = r.customer_id
where r.rental_id is null;

--18

select 
c.name,
sum(p.amount) as total_revenue
from 
category c
join film_category fc on c.category_id = fc.category_id
join film f on fc.film_id = f.film_id
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
join payment p on r.rental_id = p.rental_id
group by 
c.category_id, c.name
order by 
total_revenue desc
limit 3;

--19
select f.title
from customer c 
join rental r on c.customer_id = r.customer_id
join inventory i  on r.inventory_id = i.inventory_id 
join film f  on i.film_id = f.film_id
where c.first_name = 'Mary' and c.last_name = 'Smith';

--20

select 
f.title 
from film f 
left join film_actor fa 
on f.film_id = fa.film_id
where f.film_id is null;