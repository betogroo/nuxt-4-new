---
slug: supabase_advanced_guide
updated: 2026-03-04
---

# Guia Avançado Supabase CLI 🚀

Este guia cobre **comandos**, **boas práticas reais** e um **fluxo
profissional de migrations**, incluindo cenários como status inicial
automático.

---

# 🧠 Conceitos Importantes

Antes dos comandos, entenda:

- **Migration** = versão do banco (controlada por código)
- **Seed** = dados iniciais (ex: status "open")
- **Reset** = recria tudo do zero
- **Remote ≠ Source of truth** → seu código (migrations) deve ser a
  verdade

---

# 🔁 Fluxo Profissional (RECOMENDADO)

## 🧱 1. Criar migration

```bash
supabase migration new create-demand-status
```

## ✍️ 2. Escrever SQL

Exemplo:

```sql
create table demand_status (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  is_initial boolean default false
);
```

---

## 🌱 3. Seed (dados iniciais)

Exemplo: status "open"

```sql
insert into demand_status (code, name, is_initial)
values ('open', 'Aberto', true);
```

---

## 🔄 4. Reset local (ciclo de desenvolvimento)

```bash
supabase db reset
```

Executa: - migrations - seed

---

## ☁️ 5. Enviar para produção

```bash
supabase db push
```

---

# ⚠️ Problema Clássico: ID dinâmico (SEU CASO)

Você mencionou:

> "open" tem ID diferente a cada reset

✅ SOLUÇÃO CORRETA: **usar o `code`, não o ID**

Exemplo ao inserir:

```sql
insert into demand_items (name, demand_status_id)
values (
  'Nova demanda',
  (select id from demand_status where code = 'open')
);
```

❌ NÃO usar DEFAULT com subquery (Postgres não permite)

---

# 🧰 Comandos Essenciais

## Ambiente Local

### `supabase start`

Sobe: - Postgres - Auth - Storage - Studio

---

### `supabase stop`

Para tudo

---

### `supabase db reset`

🔥 Mais importante no dev

- dropa banco
- roda migrations
- roda seed

---

## Migrations

### `supabase migration new <nome>`

Cria arquivo versionado

---

### `supabase db push`

Aplica migrations no remoto

---

### `supabase db pull`

Puxa schema do remoto

⚠️ Cuidado: pode bagunçar histórico

---

## Remote

### `supabase login`

Login CLI

---

### `supabase link --project-ref`

Conecta ao projeto

---

### `supabase db remote commit`

Cria migration baseado no remoto

👉 útil se alguém alterou direto no banco

---

# 🧪 Edge Functions

### Criar

```bash
supabase functions new minha-funcao
```

### Rodar local

```bash
supabase functions serve
```

### Deploy

```bash
supabase functions deploy
```

---

# 🔐 Secrets

```bash
supabase secrets set KEY=value
```

---

# 📊 Logs

```bash
supabase logs
```

---

# 🧹 Boas Práticas (NÍVEL SÊNIOR)

✔ Sempre use migrations (NUNCA altere direto produção)\
✔ Use `code` como referência estável\
✔ Seed apenas dados essenciais\
✔ Rode `db reset` frequentemente\
✔ Versione tudo no Git

---

# 🧨 Anti-patterns (evite!)

❌ Usar ID fixo de seed\
❌ Alterar banco manualmente\
❌ Não versionar migrations\
❌ Misturar dados de seed com dados reais

---

# 📌 Resumo Final

Ação Comando

---

subir ambiente start
resetar banco db reset
criar migration migration new
enviar produção db push
rodar functions functions serve

---

# 💡 Dica final (importante)

Se quiser evitar subquery toda vez:

👉 Crie uma função:

```sql
create function get_initial_status()
returns uuid as $$
  select id from demand_status where is_initial = true limit 1;
$$ language sql stable;
```

E use:

```sql
insert into demand_items (name, demand_status_id)
values ('Nova demanda', get_initial_status());
```

🔥 Muito mais limpo!

---

**Fim do guia**
