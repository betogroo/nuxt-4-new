create table
    public.demand_sequences (year int primary key, current_number int not null);

alter table public.demand_sequences enable row level security;