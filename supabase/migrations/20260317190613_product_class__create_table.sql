create table
    public.product_class (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz default now (),
        updated_at timestamptz default now (),
        name text not null,
        code int not null
    );

alter table public.product_class enable row level security;

create policy "Enable read for authenticated users only" on public.product_class for
select
    to authenticated using (true);

create trigger set_product_class_updated_at before
update on public.product_class for each row execute function set_updated_at ();