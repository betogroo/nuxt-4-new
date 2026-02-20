---
slug: demand-sequence
updated: 2026-02-20
---

# Geração Automática de Número de Processo

## 📌 Objetivo

Este documento descreve o funcionamento do sistema responsável por gerar
automaticamente o número interno de processos, utilizando como exemplo o campo
(`internal_process_number`) da tabela `demands`.

O número é:

- sequencial
- reiniciado a cada ano
- gerado no banco de dados
- protegido por RLS (Row Level Security)
- independente do frontend

Exemplo:

    Ano: 2026
    Processos:
    1
    2
    3
    ...

---

## 🧠 Problema Resolvido

Precisávamos:

✅ gerar números sequenciais por ano\
✅ evitar concorrência (race condition)\
✅ impedir manipulação manual pelos usuários\
✅ manter RLS ativo no Supabase\
✅ garantir consistência mesmo com múltiplos usuários inserindo dados
simultaneamente

A solução foi implementar:

> **Trigger + Function (SECURITY DEFINER)**

---

## 🏗️ Estrutura Geral

### Tabelas envolvidas

#### `demands`

Tabela principal das demandas.

Campos relevantes:

- `year`
- `internal_process_number`

Esses campos **não são enviados pelo frontend**.

---

#### `demand_sequences`

Tabela interna que controla a sequência anual.

```sql
create table demand_sequences (
  year integer primary key,
  current_number integer not null
);
```

Exemplo:

year current_number

---

2026 15

Significa que o próximo processo será o número 16.

---

## ⚙️ Funcionamento

Fluxo completo:

    Usuário
       ↓
    INSERT em demands
       ↓
    Trigger BEFORE INSERT
       ↓
    Função handle_demand_sequence()
       ↓
    Atualiza demand_sequences
       ↓
    Define automaticamente:
       - year
       - internal_process_number
       ↓
    Registro salvo

---

## 🔐 Row Level Security (RLS)

A tabela `demand_sequences` possui RLS ativado.

Usuários **não devem** manipular essa tabela diretamente.

O acesso ocorre apenas através da função do trigger.

---

## 🚨 Problema Encontrado

Mesmo com policies liberando INSERT/UPDATE, ocorria o erro:

    new row violates row-level security policy

Motivo:

> Funções executam com permissões do usuário chamador por padrão.

O trigger estava tentando atualizar `demand_sequences` como o usuário
autenticado, e o RLS bloqueava.

---

## ✅ Solução: SECURITY DEFINER

A função foi criada usando:

```sql
security definer
```

Isso faz a função executar como o **dono da função** (normalmente
`postgres`), ignorando RLS internamente.

---

## 🧩 Função Final

```sql
create or replace function public.handle_demand_sequence()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
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
```

---

## 🔒 Por que `set search_path = public`?

Evita vulnerabilidades onde outro schema poderia sobrescrever objetos
usados pela função.

É uma prática recomendada ao usar `SECURITY DEFINER`.

---

## 🎯 Trigger

```sql
create trigger before_insert_demand
before insert on demands
for each row
execute function public.handle_demand_sequence();
```

---

## 👑 Garantir Owner da Função

```sql
alter function public.handle_demand_sequence()
owner to postgres;
```

Isso garante execução privilegiada.

---

## 🔐 Política Recomendada (Importante)

A tabela `demand_sequences` deve ser interna.

Recomendação:

```sql
ALTER TABLE demand_sequences ENABLE ROW LEVEL SECURITY;
```

Sem policies públicas de INSERT/UPDATE.

Assim:

✅ usuários não manipulam sequência\
✅ apenas o sistema altera números

---

## ✅ Benefícios da Abordagem

- Sem race conditions
- Sequência consistente
- Segurança via RLS
- Backend como fonte da verdade
- Frontend simplificado
- Escalável para múltiplos usuários

---

## 📈 Possíveis Evoluções

### Número formatado automaticamente

Exemplo:

    DEM-2026-000123

Pode ser gerado diretamente no banco adicionando:

- coluna calculada
- ou campo derivado no trigger

---

### Auditoria futura

Pode-se registrar eventos:

    Demand Created
    Demand Updated
    Status Changed

em uma tabela `demands_events`.

---

## 🧾 Resumo

Item Responsável

---

Sequência Banco
Segurança RLS
Incremento Trigger
Permissão especial SECURITY DEFINER
Frontend Apenas envia dados da demanda

---

## ✅ Regra de Ouro

> Números sequenciais críticos devem sempre ser gerados no banco de
> dados, nunca no frontend.

    Frontend pede.
    Banco decide.
