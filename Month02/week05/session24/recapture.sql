select first_name, last_name from actor;
select * from actor limit 10;
-- where clause   
select * from actor where actor_id = 101;
-- Susan
select * from actor where first_name = 'Susan'

select * from actor where first_name = 'Susan' and last_name = 'Davis';
select * from actor where first_name = 'Penelope' or last_name = 'Johansson';
select * from actor where first_name like '%s_n%';
select * from actor order by actor_id desc limit 1;
select * from actor order by first_name desc, last_name asc;
