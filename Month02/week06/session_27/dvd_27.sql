select title, length from film;

select title, length from film order by length desc limit 10;

select * from customer where active = 0

select SUM(amount), AVG(amount), count(*)  from payment;

select title, length from film where length > (select  avg(length) from film)

select title, length, rating from film where rating = 'PG-13' and length between 120 and 180;

select amount from payment where amount > 10 order by amount desc;

select title, length, rating from film where rating = 'G' and length < 60;

select SUM(amount), count(amount) from payment where cast(payment_date as date) = '2007-02-15';

select title from film where title like '%Love';