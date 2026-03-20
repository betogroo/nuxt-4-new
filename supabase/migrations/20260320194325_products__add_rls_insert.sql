create policy "Enable insert to authenticated users" on public.products as PERMISSIVE for insert to authenticated
with
    check (true)