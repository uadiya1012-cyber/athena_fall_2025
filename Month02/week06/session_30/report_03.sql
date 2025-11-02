-- Тайлан 3: Ангиллын Дундаж Үнэ
select 
c."name" , avg(p.price )
from categories c 
inner join products p 
on c.id = p.category_id 
group by c."name" ;
