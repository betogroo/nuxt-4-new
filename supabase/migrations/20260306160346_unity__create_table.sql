create table unity (
    id uuid not null default gen_random_uuid(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    name text not null,
    name_bec text not null,
    constraint unity_pkey primary key(id)
);

create trigger set_unity_updated_at
before update on unity
for each row
execute function set_updated_at();

