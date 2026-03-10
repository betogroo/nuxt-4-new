create table expense_type(
    id uuid not null default gen_random_uuid(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    expense_number int not null,
    name int not null,
    constraint expense_type_pkey primary key(id)
);

create trigger set_expense_type_updated_at
before update on expense_type
for each row
execute function set_updated_at();