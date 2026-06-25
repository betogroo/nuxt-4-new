create table
    public.demand_status (
        id uuid primary key default gen_random_uuid (),
        code text unique not null,
        name text not null,
        color text,
        sort_order int,
        is_initial boolean default false,
        is_final boolean default false,
        is_demand_active boolean default true,
        created_at timestamptz default now (),
        updated_at timestamptz default now (),
        deleted_at timestamptz default null,
        active boolean not null default true
    );

alter table public.demand_status enable row level security;

create policy "Enable read to authenticated users only" on public.demand_status for
select
    to authenticated using (true);

create trigger set_demand_status_update_at before
update on public.demand_status for each row execute function set_updated_at ();