create policy "Enable read for authenticated users only"
on "public"."products"
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);