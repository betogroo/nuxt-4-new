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

  INSERT INTO
    "public"."demand_items" (
        "id",
        "created_at",
        "updated_at",
        "demand_id",
        "product_id",
        "packaging_type_id",
        "quantity",
        "estimated_price",
        "offered_price",
        "item_order",
        "active",
        "deleted_at",
        "demand_status_id"
    )
VALUES
    (
        '5020c2a1-c199-4a35-9895-261885a8451b',
        '2026-04-17 13:52:19.386134+00',
        '2026-04-17 13:52:19.386134+00',
        '771b2d38-ab7a-4c17-8edc-ccc9061e131c',
        '1539d5b9-2184-4f17-a6a0-7a8a7abc67a5',
        '135755d9-3587-40fe-921a-1aa0ac08e020',
        '30',
        null,
        null,
        '2000',
        'true',
        null,
        '751e2ef2-8a03-408b-b25f-dddce25bff84'
    ),
    (
        'a05d5cfc-6bd1-41e1-8617-7ed61902d8e3',
        '2026-04-17 13:52:34.653318+00',
        '2026-04-17 13:52:34.653318+00',
        '771b2d38-ab7a-4c17-8edc-ccc9061e131c',
        '23e86f48-b981-47b4-8210-62f05e509f2b',
        '135755d9-3587-40fe-921a-1aa0ac08e020',
        '40',
        null,
        null,
        '3000',
        'true',
        null,
        '751e2ef2-8a03-408b-b25f-dddce25bff84'
    ),
    (
        'a728528a-bdf5-4b43-8516-4631d9586cac',
        '2026-04-17 13:52:54.76602+00',
        '2026-04-17 13:52:54.76602+00',
        '771b2d38-ab7a-4c17-8edc-ccc9061e131c',
        '2b82eb1c-e1d3-4ab4-9400-6699f9a6bcc3',
        '135755d9-3587-40fe-921a-1aa0ac08e020',
        '50',
        null,
        null,
        '4000',
        'true',
        null,
        '751e2ef2-8a03-408b-b25f-dddce25bff84'
    ),
    (
        'eaef446a-df15-4139-a1a3-05fb4df5a244',
        '2026-04-17 13:52:00.421358+00',
        '2026-04-17 13:52:00.421358+00',
        '771b2d38-ab7a-4c17-8edc-ccc9061e131c',
        '14b7e9c0-543e-4423-a7ba-174ffde0db43',
        '135755d9-3587-40fe-921a-1aa0ac08e020',
        '20',
        null,
        null,
        '1000',
        'true',
        null,
        '751e2ef2-8a03-408b-b25f-dddce25bff84'
    );
end $$;