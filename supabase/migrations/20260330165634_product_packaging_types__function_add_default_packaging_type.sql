create function add_default_packaging_type()
returns trigger
language plpgsql
as $$
declare
    v_packaging_type_id uuid;
begin
    select id
    into v_packaging_type_id
    from public.packaging_types
    where name = 'Unidade'
    limit 1;

    if v_packaging_type_id is null then
        raise exception 'Unidade não encontrada';
    end if;

    insert into public.product_packaging_types (product_id, packaging_type_id)
    values (new.id, v_packaging_type_id)
    on conflict do nothing;
    return new;
end;
$$;

create trigger on_new_product 
after insert on public.products
for each row 
execute function add_default_packaging_type();