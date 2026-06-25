create table
    public.demand_items (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        demand_id uuid not null references demands (id),
        product_id uuid not null references products (id),
        packaging_type_id uuid not null references packaging_types (id),
        quantity int not null check (quantity > 0),
        estimated_price numeric(10, 4),
        offered_price numeric(10, 4),
        item_order int not null,
        status text not null default 'open',
        unique (demand_id, product_id),
        unique (demand_id, "item_order")
    );

alter table public.demand_items enable row level security;

create policy "Enable read for authenticated users only" on public.demand_items to authenticated using (true);

create index idx_demand_items_demand on public.demand_items (demand_id);

create index idx_demand_items_product on public.demand_items (product_id);

create trigger set_demand_items_updated_at BEFORE
update on demand_items for EACH row execute FUNCTION set_updated_at ();