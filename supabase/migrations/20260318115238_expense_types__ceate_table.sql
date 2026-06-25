create table
    public.expense_types (
        id uuid primary key default gen_random_uuid (),
        created_at timestamptz not null default now (),
        updated_at timestamptz not null default now (),
        expense_number int not null,
        name text not null
    );

create trigger set_expense_types_updated_at before
update on public.expense_types for each row execute function set_updated_at ();

alter table public.expense_types enable row level security;

create policy "Enable read for authenticated users only" on public.expense_types for
select
    to authenticated using (true);