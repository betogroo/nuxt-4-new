create policy "Enable read for authenticated users only"
on public.product_class
as PERMISSIVE
for SELECT
to authenticated
using (
    true
);