create function new_demand_item_order()
returns trigger
language plpgsql
as $$ 
begin
    if new.item_order is not null then
        return new;
    end if;

    select coalesce(max(item_order) + 1000, 1000)
    into new.item_order
    from demand_items
    where demand_id = new.demand_id;
    return new;
end;
$$;

create trigger set_demand_item_order
before insert on demand_items
for each row
execute function new_demand_item_order();