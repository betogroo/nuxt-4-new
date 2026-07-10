create table
    public.demand_sequences (year int primary key, current_number int not null);

grant select, insert, update, delete on public.demand_sequences to authenticated;
grant select on public.demand_sequences to anon;

alter table public.demand_sequences enable row level security;