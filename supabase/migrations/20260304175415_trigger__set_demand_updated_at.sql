create trigger set_demand_updated_at
before update on demand
for each row
execute function set_updated_at();