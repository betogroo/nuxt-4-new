create policy "Enable read for authenticated users only"
on public.demand_items
as PERMISSIVE
for SELECT
to authenticated
using (
    true
);