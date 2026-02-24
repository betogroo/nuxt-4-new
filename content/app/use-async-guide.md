---
slug: use-async-guide
updated: 2026-02-24
---

# useAsyncData --- Guia Completo (Nuxt)

Este documento explica **como funciona o `useAsyncData`**, quando usar,
seus estados, funções disponíveis e padrões profissionais de uso.

---

## 🧠 O que é `useAsyncData`?

`useAsyncData` é um composable do Nuxt responsável por:

- Fazer **fetch assíncrono**
- Integrar automaticamente com **SSR**
- Gerenciar **cache**
- Sincronizar **hidratação client/server**
- Controlar estados de loading e erro

Ele **não é apenas um fetch** --- é um gerenciador de dados reativos.

---

## ✅ Uso básico

```ts
const { data, error, status } = await useAsyncData('users', () => $fetch('/api/users'))
```

---

## 📦 Retornos principais

### `data`

```ts
Ref<T | null>
```

Dados retornados pela função async.

---

### `error`

```ts
Ref<Error | null>
```

Erro capturado automaticamente.

---

### `status`

Estados possíveis:

Status Significado

---

idle ainda não executou
pending carregando
success carregado
error falhou

---

### `execute()`

Executa manualmente a requisição.

Usado com:

```ts
immediate: false
```

```ts
execute()
```

Ideal para lazy loading.

---

## ⚙️ Outras funções importantes

### `refresh()`

Reexecuta a requisição ignorando cache.

```ts
refresh()
```

Use quando dados podem ter mudado.

---

### `clear()`

Limpa completamente o estado.

```ts
clear()
```

Remove:

- data
- error
- status

Volta para `idle`.

---

### `pending` (compatibilidade)

Boolean indicando loading:

```ts
pending.value === true
```

Hoje recomenda-se usar `status`.

---

## ⚙️ Opções importantes

### `immediate`

```ts
{
  immediate: false
}
```

Evita execução automática.

Usado para:

- selects lazy
- dialogs
- tabs invisíveis

---

### `server`

```ts
{
  server: false
}
```

Executa apenas no client.

---

### `lazy`

```ts
{
  lazy: true
}
```

Não bloqueia navegação SSR.

---

### `default`

Define valor inicial:

```ts
{
  default: () => []
}
```

Evita `null checks`.

---

### `watch`

Reexecuta quando dependências mudam:

```ts
useAsyncData('users', fetchUsers, {
  watch: [page],
})
```

---

### `transform`

Transforma dados antes de salvar:

```ts
transform: (data) => data.items
```

---

## 🧬 Estados visuais recomendados

status UI

---

idle vazio
pending loading
success conteúdo
error mensagem de erro

---

## 🏗️ Padrão profissional

```ts
const { data, status, refresh } = useAsyncData('users', fetchUsers)
```

UI:

```vue
<div v-if="status === 'pending'">Carregando...</div>
<div v-else-if="status === 'error'">Erro</div>
<div v-else>Conteúdo</div>
```

---

## 🚀 Lazy Loading (Select moderno)

```ts
const { data, status, execute } = useAsyncData('objectTypes', fetchAll, { immediate: false })

function onOpen(open: boolean) {
  if (open && status.value === 'idle') {
    execute()
  }
}
```

---

## ⚠️ Erros comuns

### ❌ Usar composables fora do setup

```ts
const supabase = useSupabaseClient()
```

(no topo do arquivo)

---

### ❌ Criar `useAsyncData` dentro de eventos

Sempre criar no setup.

---

## 🧠 Regra mental

`useAsyncData` =

> Fetch + Cache + SSR + Estado + Reatividade

---

## 🏁 Quando usar?

Use quando:

✅ dados vêm de API\
✅ precisam funcionar no SSR\
✅ precisam de cache\
✅ dependem da página

Não use quando:

❌ lógica puramente local\
❌ cálculos síncronos

---

## ⭐ Resumo

- Não é só fetch
- Executa no SSR
- Possui cache automático
- Pode ser lazy
- Controla estados completos

---

Fim do guia.
