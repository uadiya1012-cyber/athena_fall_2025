--  SQL Exercises

--1

/* Эхлээд энэ тохиргооны кодыг ажиллуул */
CREATE TABLE Professors (
    prof_id INT PRIMARY KEY,
    prof_name VARCHAR(100)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_title VARCHAR(100),
    prof_id_fk INT,
    FOREIGN KEY (prof_id_fk) REFERENCES Professors(prof_id)
);

INSERT INTO Professors VALUES
(1, 'Dr. Alice Smith'),
(2, 'Prof. Bob Johnson'),
(3, 'Dr. Eve Davis');

INSERT INTO Courses VALUES
(101, 'Intro to CS', 1),
(102, 'Data Structures', 1),
(201, 'Calculus I', 2),
(301, 'Physics 101', 1);

select p.prof_name , count(c.course_id) as course_count
from professors p 
left join courses c on p.prof_id = c.prof_id_fk
group by p.prof_name 
order by course_count desc ;

--2

/* Эхлээд энэ тохиргооны кодыг ажиллуул */
CREATE TABLE Warehouses (
    wh_id INT PRIMARY KEY,
    location_city VARCHAR(100)
);

CREATE TABLE Products (
    prod_id INT PRIMARY KEY,
    prod_name VARCHAR(100),
    wh_id_fk INT,
    stock_qty INT,
    FOREIGN KEY (wh_id_fk) REFERENCES Warehouses(wh_id)
);

INSERT INTO Warehouses VALUES
(1, 'Springfield'),
(2, 'Shelbyville'),
(3, 'Capital City');

INSERT INTO Products VALUES
(10, 'Laptop', 1),
(11, 'Mouse', 1),
(12, 'Keyboard', 2),
(13, 'Monitor', 1);

select prod_name from products 
where wh_id_fk in (select wh_id from warehouses where wh_id = 1)


--3

/* Эхлээд энэ тохиргооны кодыг ажиллуул */
CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100)
);

CREATE TABLE Projects (
    proj_id INT PRIMARY KEY,
    proj_name VARCHAR(100)
);

CREATE TABLE Assignments (
    emp_id_fk INT,
    proj_id_fk INT,
    PRIMARY KEY (emp_id_fk, proj_id_fk),
    FOREIGN KEY (emp_id_fk) REFERENCES Employees(emp_id),
    FOREIGN KEY (proj_id_fk) REFERENCES Projects(proj_id)
);

INSERT INTO Employees VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Charlie');
INSERT INTO Projects VALUES (10, 'Project Phoenix'), (20, 'Project Titan');

INSERT INTO Assignments VALUES
(1, 10),
(1, 20),
(2, 10),
(3, 20);


select e.emp_name 
from employees e join assignments a on e.emp_id = a.emp_id_fk 
join projects p on a.proj_id_fk = p.proj_id 
where p.proj_name = 'Project Phoenix'


--4

/* Эхлээд энэ тохиргооны кодыг ажиллуул */
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50)
);

CREATE TABLE Comments (
    comment_id INT PRIMARY KEY,
    user_id_fk INT,
    comment_text VARCHAR(255),
    FOREIGN KEY (user_id_fk) REFERENCES Users(user_id)
);

INSERT INTO Users VALUES
(1, 'ActiveAnnie'),
(2, 'BusyBob'),
(3, 'LurkingLarry');

INSERT INTO Comments VALUES
(101, 1, 'First post!'),
(102, 2, 'Great article.'),
(103, 1, 'I agree!');

select u.username 
from users u
left join "comments" c on u.user_id = c.user_id_fk
where c.user_id_fk is null;



--5

/* Эхлээд энэ тохиргооны кодыг ажиллуул */
CREATE TABLE Restaurants (
    rest_id INT PRIMARY KEY,
    rest_name VARCHAR(100)
);

CREATE TABLE MenuItems (
    item_id INT PRIMARY KEY,
    rest_id_fk INT,
    item_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(5, 2),
    FOREIGN KEY (rest_id_fk) REFERENCES Restaurants(rest_id)
);

INSERT INTO Restaurants VALUES (1, 'The Burger Joint'), (2, 'The Salad Spot');
INSERT INTO MenuItems VALUES
(1, 1, 'Classic Burger', 'Main', 9.50),
(2, 1, 'Fries', 'Side', 3.00),
(3, 1, 'Deluxe Burger', 'Main', 12.00),
(4, 2, 'Caesar Salad', 'Main', 10.50);


select m.item_name , m.price ,
case
	when m.price < 5.00 then 'Хямд'
	when m.price <= 10.00 then 'Стандарт'
	else 'Дээд зэргийн'
end as "Price_Category"
from menuitems m 
join restaurants r
on r.rest_id = m.rest_id_fk ;




















