alter table public.products
alter column expense_type_id set not null;

alter table public.products
add constraint products_expense_types_id_fkey
foreign key (expense_type_id)
references public.expense_types(id);