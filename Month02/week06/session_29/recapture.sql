-- recapture

select * from city;

select count(*) from city group by city;

select * from film limit 10;

-- film-ийг rental rate тоолоод урд талд нь rental rate, count(*) харуулдаг болгоно уу:

select rental_rate, count(*) from film group by rental_rate; 
 
 -- хотоос улсаар нь бүлэглээд харуулах
 
select city, count(country_id) from city group by city;

-- payment нь 

select * from payment limit 10;

-- having?

select rental_rate, count(*) from film group by rental_rate having rental_rate > 3;










