


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE OR REPLACE FUNCTION "public"."can_read_demand"("demand_owner" "uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$select
    demand_owner = auth.uid()
    OR is_admin(auth.uid());$$;


ALTER FUNCTION "public"."can_read_demand"("demand_owner" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."can_read_profile"("profile_id" "uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    AS $$select
    profile_id = auth.uid()
    OR is_admin(auth.uid());$$;


ALTER FUNCTION "public"."can_read_profile"("profile_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$begin
  insert into public.profiles (id)
  values (new.id);

  return new;
end;$$;


ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_admin"() RETURNS boolean
    LANGUAGE "sql" STABLE
    AS $$select exists (
    select 1
    from profiles
    where id = auth.uid()
    and role = 'admin'
  );$$;


ALTER FUNCTION "public"."is_admin"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."is_admin"("user_id" "uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  select exists (
    select 1
    from profiles
    where id = user_id
    and role = 'admin'
  );
$$;


ALTER FUNCTION "public"."is_admin"("user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."next_demand_number"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
declare
  next_number integer;
  current_year integer := extract(year from now());
begin

  insert into demand_sequences(year, current_number)
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


ALTER FUNCTION "public"."next_demand_number"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."rls_auto_enable"() RETURNS "event_trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'pg_catalog'
    AS $$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN
    SELECT *
    FROM pg_event_trigger_ddl_commands()
    WHERE command_tag IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      AND object_type IN ('table','partitioned table')
  LOOP
     IF cmd.schema_name IS NOT NULL AND cmd.schema_name IN ('public') AND cmd.schema_name NOT IN ('pg_catalog','information_schema') AND cmd.schema_name NOT LIKE 'pg_toast%' AND cmd.schema_name NOT LIKE 'pg_temp%' THEN
      BEGIN
        EXECUTE format('alter table if exists %s enable row level security', cmd.object_identity);
        RAISE LOG 'rls_auto_enable: enabled RLS on %', cmd.object_identity;
      EXCEPTION
        WHEN OTHERS THEN
          RAISE LOG 'rls_auto_enable: failed to enable RLS on %', cmd.object_identity;
      END;
     ELSE
        RAISE LOG 'rls_auto_enable: skip % (either system schema or not in enforced list: %.)', cmd.object_identity, cmd.schema_name;
     END IF;
  END LOOP;
END;
$$;


ALTER FUNCTION "public"."rls_auto_enable"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."demand" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "description" "text" NOT NULL,
    "electronic_process_number" "text",
    "internal_process_number" bigint NOT NULL,
    "object_types_id" bigint,
    "dispute_date" "date",
    "year" integer NOT NULL,
    "owner_id" "uuid" DEFAULT "auth"."uid"() NOT NULL
);


ALTER TABLE "public"."demand" OWNER TO "postgres";


COMMENT ON TABLE "public"."demand" IS 'tabela que representa os processos de compra, por dispensa de licitação com disputa';



CREATE TABLE IF NOT EXISTS "public"."demand_events" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "description" "text",
    "demands_id" "uuid" NOT NULL
);


ALTER TABLE "public"."demand_events" OWNER TO "postgres";


COMMENT ON TABLE "public"."demand_events" IS 'histórico de alterações no processo';



ALTER TABLE "public"."demand_events" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."demand_events_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."demand_sequences" (
    "year" integer NOT NULL,
    "current_number" bigint NOT NULL
);


ALTER TABLE "public"."demand_sequences" OWNER TO "postgres";


ALTER TABLE "public"."demand_sequences" ALTER COLUMN "year" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."demand_sequences_year_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."election" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL,
    "date" "date" NOT NULL
);


ALTER TABLE "public"."election" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."object_types" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "ptres" bigint NOT NULL,
    "name" "text" NOT NULL
);


ALTER TABLE "public"."object_types" OWNER TO "postgres";


COMMENT ON TABLE "public"."object_types" IS 'tipo do p';



ALTER TABLE "public"."object_types" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."object_types_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text",
    "avatar_url" "text",
    "role" "text" DEFAULT 'user'::"text" NOT NULL
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."users" WITH ("security_invoker"='true') AS
 SELECT "u"."id",
    "u"."email",
    "p"."name",
    "p"."avatar_url",
    "p"."role",
    "p"."created_at"
   FROM ("auth"."users" "u"
     JOIN "public"."profiles" "p" ON (("p"."id" = "u"."id")));


ALTER VIEW "public"."users" OWNER TO "postgres";


ALTER TABLE ONLY "public"."demand_events"
    ADD CONSTRAINT "demand_events_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."demand"
    ADD CONSTRAINT "demand_internal_process_number_key" UNIQUE ("internal_process_number");



ALTER TABLE ONLY "public"."demand"
    ADD CONSTRAINT "demand_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."demand_sequences"
    ADD CONSTRAINT "demand_sequences_pkey" PRIMARY KEY ("year");



ALTER TABLE ONLY "public"."demand"
    ADD CONSTRAINT "demand_year_internal_process_number_unique" UNIQUE ("year", "internal_process_number");



ALTER TABLE ONLY "public"."election"
    ADD CONSTRAINT "election_date_key" UNIQUE ("date");



ALTER TABLE ONLY "public"."election"
    ADD CONSTRAINT "election_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."object_types"
    ADD CONSTRAINT "object_types_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");



CREATE OR REPLACE TRIGGER "set_demand_number" BEFORE INSERT ON "public"."demand" FOR EACH ROW EXECUTE FUNCTION "public"."next_demand_number"();



ALTER TABLE ONLY "public"."demand_events"
    ADD CONSTRAINT "demand_events_demands_id_fkey" FOREIGN KEY ("demands_id") REFERENCES "public"."demand"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."demand"
    ADD CONSTRAINT "demand_object_types_id_fkey" FOREIGN KEY ("object_types_id") REFERENCES "public"."object_types"("id");



ALTER TABLE ONLY "public"."demand"
    ADD CONSTRAINT "demand_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."profiles"("id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



CREATE POLICY "Enable insert for admin role" ON "public"."election" FOR INSERT TO "authenticated" WITH CHECK ("public"."is_admin"("auth"."uid"()));



CREATE POLICY "Enable insert for authenticated users only" ON "public"."demand" FOR INSERT TO "authenticated" WITH CHECK (true);



CREATE POLICY "Enable read access for all users" ON "public"."election" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Enable read access for authenticated users only" ON "public"."object_types" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Enable read access for owner or admin" ON "public"."demand" FOR SELECT TO "authenticated" USING ("public"."can_read_demand"("owner_id"));



CREATE POLICY "User can read own data" ON "public"."profiles" FOR SELECT USING ("public"."can_read_profile"("id"));



ALTER TABLE "public"."demand" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."demand_events" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."demand_sequences" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."election" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."object_types" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

























































































































































GRANT ALL ON FUNCTION "public"."can_read_demand"("demand_owner" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."can_read_demand"("demand_owner" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."can_read_demand"("demand_owner" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."can_read_profile"("profile_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."can_read_profile"("profile_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."can_read_profile"("profile_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";



GRANT ALL ON FUNCTION "public"."is_admin"() TO "anon";
GRANT ALL ON FUNCTION "public"."is_admin"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_admin"() TO "service_role";



GRANT ALL ON FUNCTION "public"."is_admin"("user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."is_admin"("user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_admin"("user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."next_demand_number"() TO "anon";
GRANT ALL ON FUNCTION "public"."next_demand_number"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."next_demand_number"() TO "service_role";



GRANT ALL ON FUNCTION "public"."rls_auto_enable"() TO "anon";
GRANT ALL ON FUNCTION "public"."rls_auto_enable"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."rls_auto_enable"() TO "service_role";


















GRANT ALL ON TABLE "public"."demand" TO "anon";
GRANT ALL ON TABLE "public"."demand" TO "authenticated";
GRANT ALL ON TABLE "public"."demand" TO "service_role";



GRANT ALL ON TABLE "public"."demand_events" TO "anon";
GRANT ALL ON TABLE "public"."demand_events" TO "authenticated";
GRANT ALL ON TABLE "public"."demand_events" TO "service_role";



GRANT ALL ON SEQUENCE "public"."demand_events_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."demand_events_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."demand_events_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."demand_sequences" TO "anon";
GRANT ALL ON TABLE "public"."demand_sequences" TO "authenticated";
GRANT ALL ON TABLE "public"."demand_sequences" TO "service_role";



GRANT ALL ON SEQUENCE "public"."demand_sequences_year_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."demand_sequences_year_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."demand_sequences_year_seq" TO "service_role";



GRANT ALL ON TABLE "public"."election" TO "anon";
GRANT ALL ON TABLE "public"."election" TO "authenticated";
GRANT ALL ON TABLE "public"."election" TO "service_role";



GRANT ALL ON TABLE "public"."object_types" TO "anon";
GRANT ALL ON TABLE "public"."object_types" TO "authenticated";
GRANT ALL ON TABLE "public"."object_types" TO "service_role";



GRANT ALL ON SEQUENCE "public"."object_types_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."object_types_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."object_types_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."users" TO "anon";
GRANT ALL ON TABLE "public"."users" TO "authenticated";
GRANT ALL ON TABLE "public"."users" TO "service_role";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";



































drop extension if exists "pg_net";

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


