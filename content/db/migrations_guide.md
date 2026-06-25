---
slug: migrations_guide
updated: 2026-03-04
---

# 📘 Guia Definitivo de Migrations com Supabase (Nuxt + Zod)

Este guia define um padrão profissional e organizado para trabalhar com
migrations usando Supabase em projetos com Nuxt e Zod.

---

# Install

### Powershell

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
scoop install supabase
```

# 🎯 Filosofia

Depois que você decide usar migrations:

> O banco de dados vira código.

Nada de criar tabela direto no Dashboard.\
Nada de alterar coluna manualmente em produção.\
Tudo passa por migration.

---

# 📂 Estrutura de Pastas Recomendada

    supabase/
      migrations/

    types/
      database.ts

---

# 🔄 Fluxo Ideal de Trabalho

1.  Decide a alteração estrutural
2.  Cria a migration
3.  Executa `supabase db push`
4.  Gera os types (`supabase gen types`)
5.  Atualiza schemas Zod
6.  Ajusta código
7.  Commit tudo junto

---

# 🏷 Convenção de Nomes para Migrations

Formato final do arquivo:

    <timestamp>_<nome>.sql

O timestamp é automático.\
Você controla apenas o nome.

---

# ✅ Padrão Recomendado

    <dominio>__<acao>

Regras:

- minúsculo
- snake_case
- sem acento
- sem nomes vagos
- ação clara

---

# 🧱 Exemplos por Categoria

## 1️⃣ Tabelas

Criar tabela:

    profiles__create_table
    demands__create_table

Adicionar coluna:

    demands__add_status_column
    profiles__add_role_column

Remover coluna:

    demands__drop_legacy_column

---

## 🔐 RLS (Policies)

    profiles__enable_rls
    profiles__rls_select_own
    demands__rls_update_owner

---

## 📦 Índices

    demands__add_index_owner_id
    profiles__add_unique_email

---

## ⚙️ Functions / Triggers

    functions__update_updated_at
    triggers__demands_set_status

---

# ❌ O Que Evitar

Nunca use nomes como:

    fix
    ajuste
    update
    final
    teste2
    migration

Isso vira bagunça no futuro.

---

# 🧠 Regra de Ouro

Nunca edite migrations antigas.

Se precisar alterar algo já feito:

❌ Não edite o arquivo antigo\
✅ Crie uma nova migration que altera

---

# 🔄 E Se Criar Algo Pelo Dashboard?

Se você criou algo direto no app:

1.  Rode `supabase db pull`
2.  Revise o SQL gerado
3.  Renomeie seguindo a convenção
4.  Commit imediatamente

Mas evite esse fluxo como padrão.

---

# 📌 Quando Rodar `gen types`

Sempre que mudar estrutura de tabela:

- nova coluna
- remover coluna
- mudar tipo
- nova tabela

Não precisa rodar para:

- policies
- functions
- índices

---

# 🚀 Script Recomendado

No package.json:

```json
{
  "scripts": {
    "db:types": "supabase gen types typescript --linked > types/database.ts"
  }
}
```

Depois basta rodar:

    npm run db:types

---

# 🏁 Resultado Final Esperado

Sua pasta de migrations deve parecer assim:

    20260304120649_initial_schema.sql
    20260305103000_profiles__add_role_column.sql
    20260305104500_profiles__rls_select_own.sql
    20260306120000_demands__add_status_column.sql
    20260306121500_demands__add_index_owner_id.sql
    20260307100000_functions__auto_close_demands.sql

Organizado. Legível. Profissional.

---

# 🧩 Mentalidade Final

Se alguém entrar no projeto e olhar apenas os nomes dos arquivos, ela
deve entender exatamente:

- O que mudou
- Onde mudou
- Qual foi a intenção

Se isso acontecer, sua organização está correta.
