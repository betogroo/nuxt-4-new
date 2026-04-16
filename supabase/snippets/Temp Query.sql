select
  ds_to.id,
  ds_to.code,
  ds_to.name,
  ds_to.color,
  ds_to.sort_order
from demand_status_transitions dst
join demand_status ds_to
  on ds_to.id = dst.to_status_id
where dst.from_status_id = 'd641410a-ec55-4567-9458-ce49f516ca98'
  and dst.active = true
  and ds_to.active = true
  
order by ds_to.sort_order;
  ;

  select 
  f.name as Status,
  dst.action_label as "Botão",
  t.name as "Próximos Status Disponíveis"
from public.demand_status_transitions dst
join demand_status f on f.id = dst.from_status_id
join demand_status t on t.id = dst.to_status_id
order by f.sort_order;
