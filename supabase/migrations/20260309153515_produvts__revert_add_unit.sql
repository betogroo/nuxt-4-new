alter table public.products
drop constraint if exists product_unity_id_fkey;

alter table public.products
drop column unity_id;