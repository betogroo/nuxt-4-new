create policy "Enable update for authenticated owner or admin"
on public.demands
for update
to authenticated
using (
    can_read_demand(owner_id)
)
with check (
    can_read_demand(owner_id)
);
