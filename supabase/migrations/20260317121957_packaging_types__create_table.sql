create table
    public.packaging_types (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz default now (),
        updated_at timestamptz default now (),
        name text not null,
        name_bec text not null
    );

alter table if exists public.packaging_types enable row level security;

create policy "Enable read for authenticated users only" on packaging_types for
select
    to authenticated using (true);

create trigger set_packaging_types_updated_at before
update on public.packaging_types for each row execute function set_updated_at ();