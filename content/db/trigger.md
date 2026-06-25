---
slug: trigger
date: 2026-03-19
---

Entender NEW e OLD é essencial pra dominar triggers 👍
Vou te explicar de forma bem direta e prática.

🧠 Ideia simples

Pensa assim:

Nome O que é
NEW 👉 o dado novo (o que está sendo inserido/atualizado)
OLD 👉 o dado antigo (o que já estava no banco)
📦 Exemplo real (sua tabela)

Imagina um registro em demand_items:

{
"id": "1",
"quantity": 10
}
🔹 UPDATE
update demand_items
set quantity = 20
where id = '1';

Dentro da trigger:

OLD.quantity = 10
NEW.quantity = 20

👉 perfeito pra comparar mudanças

🔹 INSERT
insert into demand_items (quantity)
values (5);

Dentro da trigger:

NEW.quantity = 5
OLD = null (não existe)
🔹 DELETE
delete from demand_items where id = '1';

Dentro da trigger:

OLD.quantity = 10
NEW = null
⚙️ Quando cada um existe
Operação NEW OLD
INSERT ✅ ❌
UPDATE ✅ ✅
DELETE ❌ ✅
🔥 Exemplo prático (bem comum)
Atualizar updated_at
begin
new.updated_at = now();
return new;
end;

👉 você está alterando o valor que será salvo

🔍 Exemplo com comparação
if new.quantity <> old.quantity then
-- faz algo
end if;

👉 executa só se mudou

⚠️ Regra MUITO importante
Em BEFORE trigger:

👉 você pode modificar NEW

new.quantity = 100;
return new;
Em AFTER trigger:

👉 não adianta mudar NEW (já foi salvo)

💡 Analogia simples

Pensa assim:

OLD = “foto antes”

NEW = “foto depois”

🚀 Aplicando no seu caso (item_order)
if new.item_order is null then
new.item_order := 1000;
end if;

👉 você está dizendo:

“Antes de salvar, ajusta esse valor”

🔥 Resumo direto

NEW → dados que vão ser salvos

OLD → dados que já estavam salvos

INSERT → só NEW

DELETE → só OLD

UPDATE → os dois

BEFORE → pode alterar NEW

AFTER → só leitura
