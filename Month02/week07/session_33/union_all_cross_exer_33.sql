-- 🎬 SQL-ийн UNION, UNION ALL, CROSS JOIN Дасгалууд

--1
select email from customer
union
select email from staff;

--2
select c.email from customer c 
union all
select s.email from staff s 

--3
select f.title, f.release_year 
from film f where f.release_year = '2006'
union 
select f.title , f.release_year 
from film f where f.release_year = '2007';

--4
select s.first_name as staff_name, st.store_id
from staff s 
cross join store st;

--5
select c."name" , l."name" 
from category c 
cross join "language" l ;

--6
with people as (
	select first_name, last_name from staff
	union
	select first_name, last_name from customer
)
select p.first_name, p.last_name, s.store_id
from people p
cross join store s;

--7
select 
'Customer' as role, address 
from address a
inner join customer c on a.address_id = c.address_id 
union all
select 
'Staff' as role, address
from address a 
inner join staff s on a.address_id = s.address_id ;


--8
with days as (
	select unnest(array
	['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']) as day_name 
)
select d.day_name, s.store_id
from days d
cross join store s 
order by s.store_id,
		case d.day_name 
			when 'Mon' then 1
			when 'Tue' then 2
			when 'Wed' then 3
			when 'Thu' then 4
			when 'Fri' then 5
			when 'Sut' then 6
			when 'Sun' then 7
		end;

--9
select 'Customer' as type, count(*) as total
from customer
union all
select 'Staff' as type, count(*) as total
from staff;

--10
select district as location from address
union
select city as location from city;