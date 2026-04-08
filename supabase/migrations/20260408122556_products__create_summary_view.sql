create view
    product_summary_view
with
    (security_invoker = on) as
select
    p.id,
    p.name,
    pc.name as class_name,
    pc.code as class_code
from
    products p
    left join product_class pc on pc.id = p.product_class_id;