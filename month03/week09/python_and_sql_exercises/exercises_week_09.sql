--1. ### DDL: `CREATE`, `ALTER`, `DROP` (Дасгал 1-7)
--Энэ хэсэг нь мэдээллийн сангийн бүтцийг тодорхойлох, өөрчлөхөд төвлөрнө.

--1

create table Departments (
	department_id int primary key,
	department_name varchar,
	location varchar
);

--2
create table Employees (
	employee_id int primary key,
	first_name varchar,
	last_name varchar,
	email varchar unique,
	salary decimal,
	hire_date date,
	department_id int, foreign key (department_id) references departments(department_id)
);

--3
create table Projects (
	project_id int primary key,
	project_name varchar,
	budget decimal
);

--4
create table Employee_Projects (
	employee_id int, foreign key (employee_id) references employees(employee_id),
	project_id int, foreign key (project_id) references projects(project_id),
	role varchar
);

--5
alter table employees
	add phone_number varchar(20);

--6
alter table projects 
alter column budget set default 5000

--7
alter table projects 
add constraint unique_project_name unique(project_name)


--### 2. DML: `INSERT` (Дасгал 8-11)
--Энэ хэсэг нь шинэ хүснэгтүүддээ өгөгдөл нэмэхэд төвлөрнө.

--8, 9
insert into departments values
(1, 'Sales', 'New York'),
(2, 'Engineering', 'San Francisco'),
(3, 'Marketing', 'Chicago');

--10
insert into employees values
(101, 'John', 'Doe', 'j.doe@company.com', 60000, '2023-01-15', null);


--11
insert into employees values
(102, 'Jane', 'Smith', 'j.smith@company.com', 50000, '2022-06-16', null);

insert into projects values
(501, 'Project Alpha', 100000);

insert into employee_projects values
(102, 501, 'Manager');

--### 3. `SELECT` ба `WHERE` (Дасгал 12-20)
--Энэ хэсэг нь өгөгдлийг татаж авах, шүүхэд төвлөрнө.

--12

select * from employees;

--13

select e.first_name, e.last_name, e.salary from employees e
group by e.first_name , e.last_name, e.salary ;

--14

select e.first_name , e.last_name  from employees e join departments d 
on e.department_id = d.department_id where d.department_name = 'Sales';

--15

select e.first_name , e.last_name , e.salary  from employees e 
where e.salary > '70000';


--16

select * from employees where department_id = 2
and salary > 80000;

--17

select * from employees where department_id = 1
or department_id = 3;

--18

select * from employees where first_name like 'J%';

--19

select * from employees where department_id is null;

--20

select * from employees where hire_date between '2023-01-01' and '2023-06-30';

--### 4. `ORDER BY` (Дасгал 21-23)
--Энэ хэсэг нь үр дүнгээ эрэмбэлэхэд төвлөрнө.

--21

select last_name from employees 
order by last_name asc;

--22

select first_name, last_name, salary from employees 
order by salary desc ;

--23

select * from employees order by department_id asc, salary desc ;



--### 5. `UPDATE` ба `DELETE` (Дасгал 24-28)
--Энэ хэсэг нь одоо байгаа өгөгдлийг өөрчлөх, устгахад төвлөрнө.

--24

update employees set salary = salary * 1.10 where employee_id = 101;

--25

update employees set department_id = 1 where department_id = 3;

--26

update projects set budget = null where project_id = 501;

--27

delete from employees where employee_id = 101;

--28

delete from projects where budget < 10000;


--### 6. `GROUP BY` ба Нийлбэр Функц (Дасгал 29-33)
--Энэ хэсэг нь өгөгдлийг нэгтгэн дүгнэхэд төвлөрнө.

--29

select count(*) from employees;

--30

select avg(salary) from employees;

--31

select sum(budget) from projects;

--32

select department_id, avg(salary) from employees group by department_id;

--33

select department_id, sum(salary) as total_salary
from employees group by department_id 
having sum(salary) > 200000;


--### 7. `JOIN` (Холболт) (Дасгал 34-42)
--Энэ хэсэг нь олон хүснэгтээс өгөгдөл нэгтгэхэд төвлөрнө.

--34

select e.first_name , d.department_name from employees e inner join departments d 
on e.department_id = d.department_id ;

--35

select e.first_name, p.project_name, ep.role from employees e 
inner join employee_projects ep on e.employee_id = ep.employee_id 
inner join projects p on ep.project_id = p.project_id ;

--36

select e.first_name, e.last_name, d.department_name from employees e 
left join departments d on e.department_id = d.department_id ;

--37

select e.employee_id, e.first_name, e.last_name from employees e
left join departments d on e.department_id = d.department_id 
where d.department_id is null;

--38

select d.department_name, e.first_name from departments d 
right join employees e on d.department_id = e.department_id ;

--39

select d.department_name, e.first_name from departments d 
right join employees e on d.department_id = e.department_id 
where e.first_name is null;

--40

select e.employee_id, e.first_name, e.last_name, e.department_id, d.department_name 
from employees e full outer join departments d on e.department_id = d.department_id;

--41

select e.first_name, p.project_name from employees e 
cross join projects p ;

--42

alter table employees add maneger_id int;

update employees set maneger_id = 101
where employee_id = 102;

select e.first_name, e2.maneger_id from employees e 
join employees e2 on e.maneger_id = e2.employee_id;


--### 8. Нэмэлт & Цэвэрлэгээ (Дасгал 43-50)
--Энэ хэсэгт дэд query (subquery) болон цэвэрлэх командууд орно.

--43

select * from employees where department_id in (
	select department_id from departments 
	where "location" = 'New York'
);

--44

select * from employee_projects where project_id in (
	select project_id from projects 
	where project_name = 'Project Alpha'
); 


--45


select
	first_name,
	(
		select avg(salary)
		from employees e1
		where e1.department_id = e.department_id
	) as department_avg_salary
from employees e;

--46

select department_id , avg_salary
from (
	select
		department_id,
		avg(salary) as avg_salary
	from employees
	where department_id is not null 
	group by department_id 
) as dept_avg
order by avg_salary desc limit 1;

--47

select first_name as name
from employees
union
select project_name as name
from projects;

--48

select
	first_name,
	salary,
	case
		when salary > 80000 then 'High'
		when salary > 50000 then 'Medium'
		else 'Low'
	end as Salary_Bracket
from employees;
	

--49

create view Employee_Department_View as
select
	e.first_name || ' ' || e.last_name as full_name,
	e.email,
	d.department_name
from employees e
join departments d on e.department_id = d.department_id;

select * from Employee_Department_View;

--50

drop table if exists employee_projects cascade;

drop table if exists employees cascade;
drop table if exists projects cascade;
drop table if exists departments  cascade;

select table_name
from information_schema.tables
where table_schema = 'public';





























