create VIEW
    product_summary_view
with
    (security_invoker = on) as
select
    p.id,
    p.name,
    p.description,
    jsonb_build_object ('name', pc.name, 'code', pc.code) as class
from
    products p
    left join product_class pc ON pc.id = p.product_class_id;

grant
select
    on product_summary_view to authenticated;