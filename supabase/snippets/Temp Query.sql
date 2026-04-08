select
  p.id,
  p.name,
  pc.name as product_class_name
from products p
left join product_class pc
on pc.id = p.product_class_id;