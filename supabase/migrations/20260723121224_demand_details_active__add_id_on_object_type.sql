create
or replace view public.demand_details_active
with
    (security_invoker = on) as
select
    d.id,
    d.description,
    d.electronic_process_number,
    d.internal_process_number,
    d.dispute_date,
    d.created_at,
    jsonb_build_object ('id', ot.id, 'name', ot.name, 'ptres', ot.ptres) as object_type,
    jsonb_build_object ('name', p.name) as owner
from
    demands d
    left join object_types ot on d.object_types_id = ot.id
    left join profiles p on d.owner_id = p.id
where
    d.active = true
    and d.deleted_at is null;