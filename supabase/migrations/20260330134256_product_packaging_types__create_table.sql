create table
    public.product_packaging_types (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        product_id uuid not null references public.products (id),
        packaging_type_id uuid not null references public.packaging_types (id),
        unique (product_id, packaging_type_id)
    );

alter table public.product_packaging_types enable row level security;

create policy "Enable read for authenticated users only" on public.product_packaging_types to authenticated using (true);

create trigger set_product_packaging_types_updated_at BEFORE
update on public.product_packaging_types for EACH row execute FUNCTION set_updated_at ();