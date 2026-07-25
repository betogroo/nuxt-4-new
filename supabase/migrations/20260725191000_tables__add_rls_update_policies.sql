-- Add RLS update policies for products
create policy "Enable update for authenticated users"
on public.products for update to authenticated using (true) with check (true);

-- Add RLS update policies for demand_items
create policy "Enable update for authenticated users"
on public.demand_items for update to authenticated using (true) with check (true);

-- Add RLS update policies for object_types
create policy "Enable update for authenticated users"
on public.object_types for update to authenticated using (true) with check (true);

-- Add RLS update policies for packaging_types
create policy "Enable update for authenticated users"
on public.packaging_types for update to authenticated using (true) with check (true);

-- Add RLS update policies for product_class
create policy "Enable update for authenticated users"
on public.product_class for update to authenticated using (true) with check (true);

-- Add RLS update policies for expense_types
create policy "Enable update for authenticated users"
on public.expense_types for update to authenticated using (true) with check (true);
