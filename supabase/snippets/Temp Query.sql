SELECT
  -- p.name,
  sk.name AS key,
  COALESCE(sv.value, ps.value) AS value
FROM
  products p
  JOIN product_specifications ps ON ps.product_id = p.id
  JOIN specification_keys sk ON sk.id = ps.key_id
  LEFT JOIN specification_values sv ON sv.id = ps.value_id;

SELECT
  p.id AS product_id,
  key,
  value
FROM
  products p,
  LATERAL jsonb_each_text (p.specifications);

select
  *
from
  specification_keys;

SELECT
  id
FROM
  specification_keys
WHERE
  name = 'Base da Tinta';

INSERT INTO
  specification_keys (name)
VALUES
  ('Cor') RETURNING id;

SELECT
  id
FROM
  specification_values
WHERE
  key_id = 'f0fb85b5-8c24-4619-8cc8-862c642bc72e'
  AND value = 'Azul';

select
  *
from
  product_specifications;