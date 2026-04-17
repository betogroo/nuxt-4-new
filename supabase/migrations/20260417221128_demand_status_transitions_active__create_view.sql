create view
    public.demand_status_transitions_active
with
    (security_invoker = on) as
select
    dst.from_status_id,
    dst.action_label,
    jsonb_build_object (
        'id',
        ds.id,
        'name',
        ds.name,
        'code',
        ds.code,
        'color',
        ds.color,
        'sort_order',
        ds.sort_order,
        'allow_cancel',
        ds.allow_cancel
    ) as to_status
from
    demand_status_transitions dst
    join demand_status ds on ds.id = dst.to_status_id
where
    ds.active = true
    and ds.deleted_at is null;

grant
select
    on public.demand_status_transitions_active to authenticated;