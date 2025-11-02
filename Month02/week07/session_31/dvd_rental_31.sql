--1
select 
c.first_name, c.last_name, s.store_id, c.email  
from customer c 
inner join
store s 
on c.customer_id = s.store_id; 

--2
select
c.first_name, c.last_name, count(r.rental_id) as total_rentals
from customer c 
inner join
rental r 
on c.customer_id = r.customer_id
group by c.first_name, c.last_name; 

--3
select
c.first_name, c.last_name, sum(p.amount) as total_spent
from customer c 
inner join
payment p 
on c.customer_id = p.customer_id
group by c.first_name , c.last_name;

--4
select 
a.first_name , a.last_name, count(fa.film_id) as film_count
from actor a 
inner join 
film_actor fa 
on a.actor_id = fa.actor_id 
group by a.first_name , a.last_name ;

--5
select 
s.first_name , s.last_name , sum(p.amount  ) as total_revenue
from staff s 
inner join 
payment p 
on s.staff_id = p.staff_id
group by s.first_name , s.last_name ;

--6
select 
f.title , count(r.rental_id ) as rental_count
from 
film f 
inner join 
inventory i 
on f.film_id = i.film_id 
inner join 
rental r 
on i.inventory_id = r.inventory_id
group by f.title;

--7

select 
avg(p.amount )
from
rental r 
inner join 
payment p 
on r.rental_id = p.rental_id; 

--8

select 
c."name" , count(fc.category_id ) as total_film
from film_category fc 
inner join category c 
on fc.category_id = c.category_id 
group by c."name";


--9

select
c.first_name , c.last_name,
count(r.rental_id ) as total_rentals
from 
rental r 
inner join
customer c 
on r.customer_id = c.customer_id 
group by c.first_name, c.last_name 
having count(r.rental_id) > 40
order by total_rentals desc;


--10

select rating, title, length from film order by length desc limit 5; 













