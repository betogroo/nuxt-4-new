create policy "Enable read for authenticated users only"
on "public"."unity"
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);