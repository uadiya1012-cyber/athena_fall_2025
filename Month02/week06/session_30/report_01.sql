-- Тайлан 1: Бүтээгдэхүүний Ангиллын Жагсаалт
select 
p."name" , c."name" 
from categories c 
inner join products p
on c.id = p.id ;
