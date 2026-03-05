create table public.product_specifications (
    id uuid not null default gen_random_uuid(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    name text not null,
    constraint product_specifications_pkey primary key(id)
);

create trigger set_product_specifications_updated_at
before update on product_specifications
for each row
execute function set_updated_at();