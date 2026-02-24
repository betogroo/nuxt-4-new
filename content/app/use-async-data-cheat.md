---
slug: use-async-data-cheat
updated: 2026-02-24
---

# useAsyncData --- Cheatsheet (Nuxt)

## 🧠 O que é?

`useAsyncData` = **Fetch + SSR + Cache + Estado reativo**

Use para carregar dados de API em páginas e componentes Nuxt.

---

## ✅ Uso mínimo

```ts
const { data, status, error } = await useAsyncData('users', () => $fetch('/api/users'))
```

---

## 📦 Retornos principais

Propriedade Tipo Para quê serve

---

data Ref\<T \| null\> dados retornados
status Ref`<string>`{=html} estado da requisição
error Ref\<Error \| null\> erro capturado
execute() fn executa manualmente
refresh() fn refetch ignorando cache
clear() fn limpa estado
pending Ref`<boolean>`{=html} loading (legacy)

---

## 🔄 Status possíveis

status significado

---

idle nunca executou
pending carregando
success sucesso
error falhou

---

## ⚙️ Opções mais usadas

### Lazy (manual)

```ts
useAsyncData('key', fetchFn, {
  immediate: false,
})
```

Executar depois:

```ts
execute()
```

---

### Client only

```ts
{
  server: false
}
```

---

### Default value

```ts
{
  default: () => []
}
```

---

### Watch dependencies

```ts
useAsyncData('users', fetchUsers, {
  watch: [page],
})
```

---

### Transform result

```ts
transform: (data) => data.items
```

---

## 🚀 Padrões comuns

### Loading UI

```vue
<div v-if="status === 'pending'">Loading...</div>
<div v-else-if="status === 'error'">Erro</div>
<div v-else>Conteúdo</div>
```

---

### Lazy Select (recomendado)

```ts
const { data, status, execute } = useAsyncData('objectTypes', fetchAll, { immediate: false })

function onOpen(open: boolean) {
  if (open && status.value === 'idle') {
    execute()
  }
}
```

---

## ❌ Erros comuns

### NÃO faça:

```ts
const client = useSupabaseClient()
```

(no topo do arquivo)

✔ sempre dentro de composable/setup.

---

### NÃO crie dentro de eventos

```ts
click() {
  useAsyncData(...) // errado
}
```

---

## 🧬 Regra mental

    useAsyncData ≠ fetch
    useAsyncData = DATA LAYER

---

## 🏁 Quando usar

✅ APIs\
✅ SSR\
✅ cache automático\
✅ dados de página

❌ cálculos locais\
❌ lógica síncrona

---

## ⭐ TL;DR

- Executa no SSR
- Cache automático
- Estados prontos
- Pode ser lazy
- Centraliza fetch da UI

---
