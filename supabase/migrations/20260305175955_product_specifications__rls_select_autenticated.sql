create policy "Enable select for authenticated users only"
on "public"."product_specifications"
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);