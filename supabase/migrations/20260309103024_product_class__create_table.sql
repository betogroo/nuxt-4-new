create table product_class (
    id uuid not null default gen_random_uuid(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    name text not null,
    code int not null,
    constraint poduct_class_pkey primary key(id)
);

create trigger set_product_class_updated_at
before update on product_class
for each row
execute function set_updated_at();