drop trigger if exists set_expense_type_updated_at on expense_types cascade;

create trigger set_expense_type_updated_at
before update on expense_types
for each row
execute function set_updated_at();