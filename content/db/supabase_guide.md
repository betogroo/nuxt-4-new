---
slug: supabase_guide
updated: 2026-03-04
---

# Guia de Comandos Supabase CLI

Este guia reúne os principais comandos do Supabase CLI para uso
**local** e **remoto**, com explicações práticas.

---

## 📦 Inicialização

### `supabase init`

Inicializa um projeto Supabase na pasta atual. Cria a estrutura
`.supabase/`.

---

## 🚀 Ambiente Local

### `supabase start`

Inicia o ambiente local (Postgres, Auth, Studio, etc).

### `supabase stop`

Para todos os serviços locais.

### `supabase status`

Mostra o status dos serviços locais.

### `supabase db reset`

Reseta o banco local: - Dropa tudo - Recria schema - Executa
migrations - Executa seed

⚠️ Muito usado durante desenvolvimento.

---

## 🧱 Migrations

### `supabase migration new <nome>`

Cria uma nova migration.

### `supabase db push`

Aplica migrations locais no banco remoto.

### `supabase db pull`

Puxa o schema do banco remoto para local (gera migration).

---

## 🌱 Seed

### `supabase db seed`

Executa arquivos de seed configurados.

---

## 🔗 Conectar ao Projeto Remoto

### `supabase login`

Autentica na sua conta.

### `supabase link --project-ref <ref>`

Vincula seu projeto local ao remoto.

---

## ☁️ Banco Remoto

### `supabase db push`

Envia migrations para o banco remoto.

### `supabase db remote commit`

Cria migration baseada no estado atual do banco remoto.

---

## 🧪 Funções (Edge Functions)

### `supabase functions new <nome>`

Cria uma nova função.

### `supabase functions serve`

Roda funções localmente.

### `supabase functions deploy`

Faz deploy da função para produção.

---

## 🔐 Segredos

### `supabase secrets set`

Define variáveis de ambiente no projeto remoto.

---

## 📊 Logs

### `supabase logs`

Exibe logs do projeto remoto.

---

## 🧹 Dicas Importantes

- Use `db reset` frequentemente em dev
- Prefira migrations ao invés de alterações manuais
- Sempre versione migrations no Git
- Evite alterar diretamente o banco remoto sem migration

---

## 📚 Resumo

Comando Uso

---

start sobe ambiente local
stop para ambiente
db reset reseta banco local
migration new cria migration
db push envia para remoto
db pull traz do remoto
functions deploy deploy functions

---

**Autor:** Guia gerado automaticamente
