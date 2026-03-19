select coalesce(max(item_order) + 1000, 1000)
  from demand_items
  where demand_id = '1982b3c5-43df-42eb-9391-0f7ddd3fe804'