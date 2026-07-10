select
    table_schema,
    table_name,
    privilege_type,
    grantee
from information_schema.role_table_grants
where table_schema = 'public'
order by table_name, grantee, privilege_type;