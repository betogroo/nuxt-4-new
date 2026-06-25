create or replace function set_default_demand_item_status()
returns trigger as $$
begin
  if new.demand_status_id is null then
    select id into new.demand_status_id
    from public.demand_status
    where code = 'open'
    limit 1;
  end if;

  return new;
end;
$$ language plpgsql;

create trigger trg_set_default_demand_item_status
before insert on public.demand_items
for each row
execute function set_default_demand_item_status();