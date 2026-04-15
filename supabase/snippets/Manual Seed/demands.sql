do $$
declare
  v_profile_id uuid;
  
begin
  -- pega o id (garantido 1 registro)
  select id into v_profile_id
  from public.profiles
  limit 1;

  insert into public.demands (
    id,
    created_at,
    updated_at,
    description,
    electronic_process_number,
    internal_process_number,
    year,
    object_types_id,
    owner_id,
    dispute_date,
    active,
    deleted_at
  )
  values
    (
      '771b2d38-ab7a-4c17-8edc-ccc9061e131c',
      '2026-04-15 13:14:19.105791+00',
      '2026-04-15 13:14:19.105791+00',
      'Gêneros Alimentícios',
      '11111111/11',
      '1',
      '2026',
      '1',
      v_profile_id,
      '2026-05-13',
      true,
      null
    ),
    (
      'b1764762-b890-4528-b2d5-60d16c39f428',
      '2026-04-15 13:14:48.498076+00',
      '2026-04-15 13:14:48.498076+00',
      'Material de Escitório e Papelaria',
      '22222222/22',
      '2',
      '2026',
      '1',
      v_profile_id,
      '2026-06-11',
      true,
      null
    );
end $$;