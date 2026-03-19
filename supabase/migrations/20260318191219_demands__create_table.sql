create table
    public.demands (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        description text not null,
        electronic_process_number text,
        internal_process_number int not null,
        year int not null,
        object_types_id int references object_types (id),
        owner_id uuid not null default auth.uid () references profiles (id),
        dispute_date date,
        status text default 'open',
        unique (year, internal_process_number)
    );

alter table public.demands enable row level security;

create or replace function public.can_read_demand(owner_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    owner_id = auth.uid()
    OR is_admin();
$$;

create policy "Enable read for authenticated owner or admin"
on public.demands for select to authenticated using (
    can_read_demand(owner_id)
);

create policy "Enable insert for authenticated users"
on public.demands
for insert
to authenticated
with check (true);

create trigger set_demand_number
before insert on public.demands
for each row
execute function next_demand_number()