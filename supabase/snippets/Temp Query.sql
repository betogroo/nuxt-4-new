select di.id, di.created_at, di.updated_at, di.quantity, di.estimated_price, di.offered_price

from demand_items di
where di.active = true and di.deleted_at is null
order by di.item_order