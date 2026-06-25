create table
    public.demand_status_transitions (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        deleted_at timestamptz,
        active boolean default true,
        from_status_id uuid not null references demand_status (id),
        to_status_id uuid not null references demand_status (id),
        unique (from_status_id, to_status_id)
    );

alter table public.demand_status_transitions enable row level security;

create policy "Enable read to authenticated users only" on public.demand_status_transitions for
select
    to authenticated using (true);