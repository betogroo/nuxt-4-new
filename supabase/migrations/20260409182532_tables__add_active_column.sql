DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN
    SELECT table_schema, table_name
    FROM information_schema.tables t
    WHERE table_type = 'BASE TABLE'
      AND table_schema = 'public'
      AND NOT EXISTS (
        SELECT 1
        FROM information_schema.columns c
        WHERE c.table_schema = t.table_schema
          AND c.table_name = t.table_name
          AND c.column_name = 'active'
      )
  LOOP
    EXECUTE format(
      'ALTER TABLE %I.%I ADD COLUMN active boolean NOT NULL DEFAULT true',
      r.table_schema,
      r.table_name
    );
  END LOOP;
END $$;