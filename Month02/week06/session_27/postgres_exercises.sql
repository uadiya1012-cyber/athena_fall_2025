create table employees (
id serial primary key,
first_name varchar(100),
last_name varchar(100),
department varchar(50),
salary integer,
hire_date date
);

insert into employees (first_name, last_name, department, salary, hire_date)
values ('Dorj', 'Bayr', 'Hugjuulelt', 3500000, '2022-01-15'),
('Saraa', 'Bold', 'Marketing', 2800000, '2021-06-20'),
('Tulga', 'Ganbat', 'Hugjuulelt', 4200000, '2023-03-10'),
('Nomin', 'Enkh', 'Nygtlan', 3100000, '2020-11-01'),
('Ochir', 'Sukh', 'Hugjuulelt', 3800000, '2022-08-25');

select * from employees;

select first_name, salary from employees;

select * from employees where department like '%Hugjuulelt%';

select * from employees order by salary desc limit 2;

select * from employees order by first_name desc;

select * from employees order by salary desc;

select * from employees order by salary desc limit 2;

select * from employees order by hire_date desc limit 3;

select count(*) from employees;

select sum(salary) from employees;

select avg(salary) from employees;

select max(salary), min(salary) from employees; 

select count(department) from employees where department like '%Marketing%';

select * from employees where hire_date > '2022-01-01'

select max(salary) from employees where department like '%Hugjuulelt%';

select * from employees where first_name like 'D%'

select * from employees where hire_date < '2022-01-01' and salary < '3000000'

select * from employees order by hire_date asc limit 1;

select avg(salary) from employees where department like '%Hugjuulelt%';

select max(salary) - min(salary) from employees;

















