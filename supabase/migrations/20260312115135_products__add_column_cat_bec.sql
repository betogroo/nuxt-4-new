alter table public.products
add column cat_bec integer;

update public.products
set cat_bec = 0
where cat_bec is null;

alter table public.products
alter column cat_bec set not null;