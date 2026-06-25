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

  jsonb_build_object(
    'name', pc.name,
    'code', pc.code
  ) as class,

  jsonb_build_object(
    'name', et.name,
    'expense_number', et.expense_number
  ) as expense_type,

  coalesce(ppt_data.packaging_types, '[]') as packaging_types

from products p

left join product_class pc
  on pc.id = p.product_class_id

left join expense_types et
  on et.id = p.expense_type_id

left join lateral (
  select
    jsonb_agg(
      jsonb_build_object(
        'id', pt.id,
        'name', pt.name,
        'name_bec', pt.name_bec
      )
    ) as packaging_types
  from product_packaging_types ppt
  join packaging_types pt
    on pt.id = ppt.packaging_type_id
  where ppt.product_id = p.id
    and ppt.deleted_at is null
    and pt.deleted_at is null
) ppt_data on true

where
  p.active = true
  and p.deleted_at is null