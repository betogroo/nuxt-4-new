create policy "Enable read for authenticated users only"
on public.expense_types
as PERMISSIVE
for SELECT
to authenticated
using (
    true
);