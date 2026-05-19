CREATE TABLE
    public.product_specifications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        deleted_at timestamptz,
        active boolean default true,
        product_id UUID REFERENCES products (id),
        key_id UUID REFERENCES specification_keys (id),
        value_id UUID REFERENCES specification_values (id),
        value TEXT, -- fallback se não usar tabela de valores
        UNIQUE (product_id, key_id)
    );

alter table public.product_specifications enable row level security;

create policy "Enable read for authenticated users only" on public.product_specifications to authenticated using (true);

create trigger set_product_specification_updated_at before
update on public.product_specifications for each row execute function set_updated_at ();