create table tasks (
	id serial primary key,
	title varchar(200) not null,
	description text,
	completed boolean default false,
	created_at timestamp default current_timestamp
);

insert into tasks(title, description)
values 
('Python learning', 'REST API creation'),
('Javascript learning', 'DOM manipulation'),
('Database connection', 'PostgreSQL connection');

select * from tasks;
