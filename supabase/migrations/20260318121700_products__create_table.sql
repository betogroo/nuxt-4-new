create table
    public.products (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        name text not null,
        description text not null,
        cat_mat int not null,
        cat_bec int not null,
        nat_gov int,
        nat_bec int,
        pdm int,
        active boolean default true,
        specifications jsonb,
        product_class_id uuid references product_class (id),
        expense_type_id uuid references expense_types (id)
    );

create index if not exists idx_products_expense_type_id on public.products (expense_type_id);

create index if not exists idx_products_product_class_id on public.products (product_class_id);

create trigger set_products_update_at before
update on public.products for each row execute function set_updated_at ();

alter table public.products enable row level security;

create policy "Enable read to authenticated users only" on public.products for
select
    to authenticated using (true)