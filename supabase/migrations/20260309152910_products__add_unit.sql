alter table public.products
add column unity_id uuid;

alter table public.products
add constraint product_unity_id_fkey
foreign key (unity_id)
references public.unity (id);