---
slug: checklist-default-fetch
updated: 2026-02-12
---

# ✅ Checklist --- Padrão Arquitetural de Listagem (Nuxt + Supabase + Zod)

---

## 🎯 Objetivo

Separar responsabilidades corretamente:

- **Composable →** função pura de fetch\
- **Página →** controla estado assíncrono\
- **Componente de Lista →** renderiza estados visuais

Fluxo ideal:

Banco → Composable (valida) → Página (estado async) → Lista (renderiza)

---

# 1️⃣ Composable → Função Pura de Fetch

## ✔ Deve:

- [ ] Não ter `ref`
- [ ] Não ter `isLoading`
- [ ] Não ter `onMounted`
- [ ] Não controlar estado
- [ ] Apenas buscar dados
- [ ] Validar com Zod
- [ ] Lançar `AppError` se algo falhar
- [ ] Retornar `Promise<T[]>`

## ✔ Estrutura ideal

```ts
export const fetchEntities = async (): Promise<Entity[]> => {
  const supabase = useSupabaseClient()

  await useAssertSession()

  const { data, error } = await supabase.from('table').select('*')

  if (error) {
    throw new AppError('Erro ao buscar dados', error)
  }

  const parsed = Schema.safeParse(data)

  if (!parsed.success) {
    throw new AppError('Erro ao validar dados', parsed.error)
  }

  return parsed.data
}
```

---

# 2️⃣ Página → Controla Estado Assíncrono

## ✔ Deve:

- [ ] Usar `useAsyncData`
- [ ] Não usar `onMounted`
- [ ] Não criar `isFetching`
- [ ] Não criar `errorMessage`
- [ ] Delegar loading para `pending`
- [ ] Delegar erro para `error`
- [ ] Poder usar `refresh()` para recarregar

## ✔ Estrutura ideal

```ts
const { data, pending, error, status, refresh } = await useAsyncData('key', fetchFunction)
```

---

# 3️⃣ Componente de Lista → Renderiza Estados

## ✔ Deve:

- [ ] Receber `items`
- [ ] Receber `isLoading`
- [ ] Receber `hasFetched`
- [ ] Controlar ordem de renderização:
  - loading
  - empty
  - lista
- [ ] Ter slots opcionais
- [ ] Ter fallback padrão

## ✔ Ordem correta de renderização

```vue
v-if="isLoading" v-else-if="hasFetched && !items.length" v-else
```

---

# 4️⃣ Regra de Responsabilidade

Camada Responsabilidade

---

Composable Buscar e validar dados
Página Orquestrar estado assíncrono
Lista Renderizar estados visuais

---

# 5️⃣ Tratamento de Erros

## ✔ No composable:

Sempre lançar erro:

```ts
throw new AppError('Mensagem', detalhes)
```

## ✔ Na página:

Deixar `useAsyncData` capturar.

---

# 6️⃣ Evite Esses Erros Comuns

- [ ] Criar `isFetching` manual
- [ ] Usar `onMounted` para fetch
- [ ] Validar Zod na página
- [ ] Fazer `try/catch` fora do `useAsyncData`
- [ ] Renderizar empty antes da primeira busca
- [ ] Misturar lógica de UI dentro do composable

---

# 🏁 Resultado Final

Arquitetura clara, previsível e escalável:

Banco → Composable → Página → Lista
