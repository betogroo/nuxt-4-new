select
  di.id,
  di.created_at,
  di.updated_at,
  di.quantity,
  di.estimated_price,
  di.offered_price,
  di.demand_id,
  jsonb_build_object(
    'id',
    p.id,
    'name',
    p.name,
    'description',
    p.description,
    'specifications',
    p.specifications
  ) as product,
  json_build_object('name', pt.name) as packaging,
  json_build_object('id', ds.id, 'name', ds.name, 'code', ds.code, 'color', ds.color) as status
from
  public.demand_items di
  join public.products p on p.id = di.product_id
  join public.packaging_types pt on pt.id = di.packaging_type_id
  join public.demand_status ds on ds.id = di.demand_status_id
where
  di.active = true and di.deleted_at is null;

  grant
select
    on public.demand_status_transitions_active to authenticated;