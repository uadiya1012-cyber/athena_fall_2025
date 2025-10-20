create table students (
id serial primary key ,
first_name varchar(255),
last_name varchar(255),
email varchar(255),
phone_number varchar(12)
); 

insert into students (first_name, last_name, email, phone_number)
values ('bold', 'dorj', 'bold@dorj.com' , '9999999'),
('badam', 'dorj', 'badam@dorj.com', '888888');

select * from students;

-- update

update students set phone_number = '99999999' where id = 1;
update students set phone_number = '99119911' where id = 2;

-- delete

delete from students where id = 2;

truncate table students restart identity;