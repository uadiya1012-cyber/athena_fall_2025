-- Тайлан 4: Хамгийн Үнэтэй Бүтээгдэхүүн
select
c."name" , max(p.price)
from categories c 
inner join products p 
on c.id = p.category_id 
group by c."name"   ;