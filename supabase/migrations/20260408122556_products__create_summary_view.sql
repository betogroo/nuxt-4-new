create VIEW
    product_summary_view
with
    (security_invoker = on) as
select
    p.id,
    p.name,
    p.description,
    p.cat_mat,
    p.cat_bec,
    p.nat_gov,
    p.pdm,
    p.specifications,
    p.active,
    jsonb_build_object ('name', pc.name, 'code', pc.code) as class,
    jsonb_build_object (
        'name',
        et.name,
        'expense_number',
        et.expense_number
    ) as expense_type
from
    products p
    left join product_class pc on pc.id = p.product_class_id
    left join expense_types et on et.id = p.expense_type_id;

grant
select
    on product_summary_view to authenticated;