create table employees (
	name varchar(50),
	department varchar(50),
	salary int
);

insert into employees (name, department, salary)
values ('Дорж', 'IT', 3500000),
('Сараа', 'HR', 2800000),
('Тулга', 'IT', 4200000),
('Номин', 'Marketing', 3100000);


update employees
set salary = salary * 1.15
where department = 'IT';

select * from employees;

