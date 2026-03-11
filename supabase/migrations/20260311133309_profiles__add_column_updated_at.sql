alter table profiles
add column updated_at timestamptz not null default now();

create trigger set_profiles_updated_at
before update on profiles
for each row
execute function set_updated_at();