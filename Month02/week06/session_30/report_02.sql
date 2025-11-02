-- Тайлан 2: Ангилал дахь Бүтээгдэхүүний Тоо
select 
c."name" , count(p.category_id )
from categories c 
inner join products p 
on c.id = p.category_id 
group by c."name" ;