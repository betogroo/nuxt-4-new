create table public.products (
  id uuid not null default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  description text not null,
  cat_mat integer not null,
  nat_gov integer,
  nat_bec integer,
  pdm integer,
  active boolean default true,
  constraint products_pkey primary key(id)
  );

create trigger set_products_updated_at
before update on products
for each row
execute function set_updated_at();