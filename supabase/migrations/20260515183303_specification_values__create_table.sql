CREATE TABLE
    public.specification_values (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        key_id UUID REFERENCES public.specification_keys (id),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        deleted_at timestamptz,
        active boolean default true,
        value TEXT NOT NULL,
        UNIQUE (key_id, value)
    );

alter table public.specification_values enable row level security;

create policy "Enable read for authenticated users only" on public.specification_values to authenticated using (true);

create trigger set_specification_key_updated_at BEFORE
update on public.specification_values for EACH row execute FUNCTION set_updated_at ();