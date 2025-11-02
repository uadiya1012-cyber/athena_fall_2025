select c.first_name , c.last_name , p.amount 
from customer c 
inner join payment p on c.customer_id = p.customer_id;


SELECT
    c.first_name,
    c.last_name,
    p.amount
FROM customer c
LEFT JOIN payment p ON c.customer_id = p.customer_id;

SELECT
    c.first_name,
    c.last_name,
    p.amount
FROM customer c
RIGHT JOIN payment p ON c.customer_id = p.customer_id;

SELECT
    c.first_name,
    c.last_name,
    p.amount
FROM customer c
FULL JOIN payment p ON c.customer_id = p.customer_id;


SELECT c.first_name, c.last_name, p.amount
FROM customer c
INNER JOIN payment p ON c.customer_id = p.customer_id;




SELECT f.title, i.inventory_id
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id;


SELECT s.store_id, a.address
FROM address a
RIGHT JOIN store s ON a.address_id = s.address_id;


SELECT a.city, s.store_id
FROM city a
FULL JOIN store s ON a.city_id = s.address_id;