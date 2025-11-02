-- 📀 dvd_rental SQL Дасгалууд


--1
select f.title , f.rating 
from film f where f.rating = 'G';

--2
select c.first_name , c.last_name , c.create_date 
from customer c order by c.create_date desc limit 5;

--3
select count(f.title )
from film f ;

--4
select sum(p.amount), avg(p.amount), max(p.amount)
from payment p ;

--5
select rating, count(title) as number_of_films
from film group by film.rating ;

--6

select customer_id , count(*) as total_rentals
from rental group by customer_id
having count(*) > 40
order by total_rentals desc;


--7
select c."name" 
from category c 
join film_category fc on c.category_id = fc.category_id 
where c."name" = 'Action';


--8
select s.first_name , s.last_name , sum(p.amount) as total_sales
from staff s
inner join payment p on s.staff_id = p.staff_id
group by s.staff_id , s.first_name , s.last_name 
order by total_sales desc limit 5;

--9
SELECT 
    customer_id, 
    AVG(amount) AS average_payment
FROM payment
GROUP BY customer_id
ORDER BY average_payment DESC
LIMIT 5;
