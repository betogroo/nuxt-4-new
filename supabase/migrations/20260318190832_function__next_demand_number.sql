create or replace function next_demand_number()
returns trigger 
language plpgsql
security definer
set search_path = public
as $$
declare
  next_number int;
  current_year int := extract(year from now())::int;
begin

  insert into demand_sequences (year, current_number)
  values (current_year, 1)
  on conflict (year)
  do update
  set current_number = demand_sequences.current_number + 1
  returning current_number into next_number;

  new.year := current_year;
  new.internal_process_number := next_number;

  return new;
end;
$$;