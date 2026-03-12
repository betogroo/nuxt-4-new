create table demand_items (
    id uuid primary key default gen_random_uuid(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    demand_id uuid not null references demand(id),
    product_id uuid not null references products(id),
    unity_id uuid not null references unity(id),
    quantity int check (quantity > 0),
    estimated_price numeric (10,4),
    offered_price numeric (10, 4),
    position integer not null,
    constraint demand_product_unique unique (demand_id, product_id),
    constraint demand_position_unique unique (demand_id, position)
);

create index idx_demand_items_demand
on demand_items (demand_id);

create trigger set_demand_items_updated_at
before update on demand_items
for each row
execute function set_updated_at();