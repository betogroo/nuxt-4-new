alter table public.demand_items
add column demand_status_id uuid not null references demand_status (id),
drop column status;

alter table public.demands
drop column status;