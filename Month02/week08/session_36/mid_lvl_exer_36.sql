-- SQL Дунд шатны дасгалууд

--1
create table employees (
employees_id serial primary key,
name varchar(100),
salary integer,
manager_id integer
);

INSERT INTO employees (employees_id, name, salary, manager_id) VALUES
(1, 'Alice Smith', 150000, NULL),
(2, 'Bob Johnson', 110000, 1),
(3, 'Charlie Lee', 85000, 2),
(4, 'David Chen', 82000, 2),
(5, 'Eve Martin', 120000, 1),
(6, 'Frank White', 95000, 5),
(7, 'Grace Hall', 98000, 5);

select m.name as manager_name, m.salary as manager_salary, 
avg(r.salary) as avegare_report_salary from employees m
join employees r on m.employees_id = r.manager_id
group by manager_name, manager_salary having m.salary > avg(r.salary)

--2
create table departments (
department_id serial primary key,
department_name varchar(50)
);

create table employees_dept (
employee_id serial primary key,
name varchar(50),
department_id integer, foreign key (department_id) references departments(department_id) 
);


INSERT INTO departments (department_id, department_name) VALUES
(101, 'Engineering'),
(102, 'Sales'),
(103, 'Marketing'),
(104, 'HR');

INSERT INTO employees_dept (employee_id, name, department_id) VALUES
(1, 'Alice', 101),
(2, 'Bob', 101),
(3, 'Charlie', 102),
(4, 'David', 103),
(5, 'Eve', 101);

select d.department_name, count(ed.employee_id) as empoyee_count
from departments d 
left join employees_dept ed 
on d.department_id = ed.department_id
group by d.department_name ;

--3


create table Employees_Proj (
	employee_id int primary key,
	name varchar(50)
); 

create table Projects (
	project_id int primary key,
	project_name varchar(50)
);

CREATE TABLE Employee_Projects (
    employee_id INT, 
    project_id INT,
    PRIMARY KEY (employee_id, project_id),
    foreign key (employee_id) references employees_proj(employee_id),
    foreign key (project_id) references projects(project_id)
);


INSERT INTO Employees_Proj (employee_id, name) VALUES
(1, 'Alice'), (2, 'Bob'), (3, 'Charlie');

INSERT INTO Projects (project_id, project_name) VALUES
(501, 'Project Alpha'), (502, 'Project Beta'), (503, 'Project Gamma');

INSERT INTO Employee_Projects (employee_id, project_id) VALUES
(1, 501),
(1, 502),
(2, 501),
(3, 503),
(1, 503);


select ep.employee_id , ep."name" 
from employees_proj ep 
join employee_projects ep2 
on ep.employee_id = ep2.employee_id 
group by ep.employee_id , ep."name" 
having count(ep2.project_id) > 1;



--4
create table Customers (
	customer_id int primary key,
	name varchar(50),
	country varchar(50)
);

create table Orders (
	order_id int primary key,
	customer_id int, foreign key (customer_id) references Customers(customer_id),
	total_value int
);

INSERT INTO customers  (customer_id, name, country) VALUES
(1, 'John (USA)', 'USA'),
(2, 'Jane (USA)', 'USA'),
(3, 'Mark (USA)', 'USA'),
(4, 'Chen (China)', 'China');

INSERT INTO Orders (order_id, customer_id, total_value) VALUES
(101, 1, 150),
(102, 1, 200),
(103, 2, 500),
(104, 3, 100),
(105, 4, 800);


select c."name" , c.country , sum(o.total_value) as total_spending
from customers c 
join orders o 
on c.customer_id = o.customer_id
where c.country = 'USA'
group by c."name" , c.country 
order by total_spending desc limit 2;


--5

create table Departments_Sales (
id int primary key,
departments varchar(50)
);

create table Employees_Sales (
employees_id int primary key,
name varchar(50),
id int, foreign key (id) references departments_sales(id)
);

create table Products (
product_id int primary key,
product_name varchar(50)
);

create table Orders_Sales (
orders_id int primary key,
employees_id int, foreign key (employees_id) references employees_sales(employees_id)
);

create table Order_Items (
item_id int primary key,
orders_id int, foreign key (orders_id) references orders_sales(orders_id),
product_id int, foreign key (product_id) references products(product_id),
price int,
amount int
);


INSERT INTO Departments_Sales VALUES (1, 'Sales'), (2, 'Engineering');

INSERT INTO Employees_Sales VALUES (10, 'Alice', 1), (11, 'Bob', 1), (12, 'Charlie', 2);

INSERT INTO Products VALUES (1001, 'Hardware'), (1002, 'Software');

INSERT INTO Orders_Sales VALUES (100, 10), (101, 11), (102, 10), (103, 12);

INSERT INTO Order_Items VALUES 
(1, 100, 1001, 2, 50), 
(2, 100, 1002, 1, 200), 
(3, 101, 1001, 10, 50), 
(4, 102, 1002, 5, 200), 
(5, 103, 1001, 3, 30);

select p.product_name , sum(oi.price * oi.amount) as total_sales
from order_items oi 
join products p on oi.product_id = p.product_id  
join orders_sales os on oi.orders_id = os.orders_id
join employees_sales es on os.employees_id = es.employees_id 
join departments_sales ds on es.id = ds.id 
where ds.departments = 'Sales'
group by p.product_name
order by total_sales desc;