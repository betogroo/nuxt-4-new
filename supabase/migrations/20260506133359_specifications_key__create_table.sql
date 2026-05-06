create table
    public.specification_keys (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        name text unique not null
    );

alter table public.specification_keys enable row level security;

create policy "Enable read for authenticated users only" on public.specification_keys to authenticated using (true);

create trigger set_specification_key_updated_at BEFORE
update on public.specification_keys for EACH row execute FUNCTION set_updated_at ();