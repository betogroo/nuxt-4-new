select 
  f.name as from_status,
  t.name as to_status
from public.demand_status_transitions dst
join demand_status f on f.id = dst.from_status_id
join demand_status t on t.id = dst.to_status_id
order by f.sort_order;
