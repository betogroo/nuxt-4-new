alter table public.products
add column product_class_id uuid;

alter table public.products
add constraint product_product_class_id_fkey
foreign key (product_class_id)
references public.product_class (id);