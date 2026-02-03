---
slug: breadcrumbs
updated: 2026-02-03
---

# UiBreadcrumbs

Componente responsável por gerar breadcrumbs de forma **manual, tipada e reativa**, com suporte a **título dinâmico** via `MaybeRef`, integrando-se ao `definePageMeta` do Nuxt.

---

## Visão geral

O `useBreadcrumbs` combina:

- Breadcrumbs **estáticos**, definidos no `page.meta`
- Um **último item dinâmico**, normalmente usado para páginas de detalhe (`[id].vue`)

Esse padrão evita heurísticas baseadas em rota (`useRoute.path`) e mantém controle total sobre títulos, URLs e hierarquia.

---

### Exemplo

::ui-demo-block
#demo
::demo-breadcrumbs
::
#code

```vue
<script setup lang="ts"></script>

<template>
  <ui-breadcrumbs :breadcrumbs="breadcrumb" />
</template>
```

::

## Assinatura

```ts
const useBreadcrumbs = (dynamicTitle?: MaybeRef<string>) => {
  breadcrumb: ComputedRef<BreadcrumbItem[]>
}
```

---

## Parâmetros

### `dynamicTitle?: MaybeRef<string>`

Título dinâmico do **último breadcrumb**.

Aceita:

- `string` → título fixo
- `Ref<string>` ou `ComputedRef<string>` → título reativo

> Se o valor for `undefined`, `null` ou vazio, **nenhum breadcrumb extra é adicionado**.

---

## Retorno

### `breadcrumb: ComputedRef<BreadcrumbItem[]>`

Array final de breadcrumbs, pronto para consumo em componentes de UI.

---

## Estrutura do BreadcrumbItem

```ts
export const BreadcrumbItemSchema = z.object({
  title: z.string(),
  href: z.string().optional(),
  disabled: z.boolean().default(false).optional(),
})

export type BreadcrumbItem = z.infer<typeof BreadcrumbItemSchema>
```

### Campos

| Campo      | Tipo      | Descrição                    |
| ---------- | --------- | ---------------------------- |
| `title`    | `string`  | Texto exibido no breadcrumb  |
| `href`     | `string`  | Rota de navegação (opcional) |
| `disabled` | `boolean` | Desabilita clique no item    |

---

## Implementação

```ts
import type { BreadcrumbItem } from '~/types'

const useBreadcrumbs = (dynamicTitle?: MaybeRef<string>) => {
  const route = useRoute()

  const breadcrumb = computed<BreadcrumbItem[]>(() => {
    const base = (route.meta.breadcrumb as BreadcrumbItem[]) || []

    const title = typeof dynamicTitle === 'string' ? dynamicTitle : dynamicTitle?.value

    if (!title) return base

    return [
      ...base,
      {
        title,
        href: route.fullPath,
        disabled: true,
      },
    ]
  })

  return { breadcrumb }
}

export default useBreadcrumbs
```

---

## Uso com `definePageMeta`

### Página base

```ts
definePageMeta({
  breadcrumb: [
    { title: 'Admin', to: '/voting/admin' },
    { title: 'Eleições', to: '/voting/admin/elections' },
  ],
})
```

---

## Uso em página dinâmica `[id].vue`

```ts
const electionName = computed(() => election.value?.name)

const { breadcrumb } = useBreadcrumbs(electionName)
```

Quando `electionName` é carregado ou atualizado, o breadcrumb reflete automaticamente o novo valor.

---

## Componente de exibição

```vue
<script setup lang="ts">
  import type { BreadcrumbItem } from '~/types'

  interface Props {
    breadcrumbs: BreadcrumbItem[]
  }

  defineProps<Props>()
</script>

<template>
  <v-breadcrumbs :items="breadcrumbs" />
</template>
```

---

## Boas práticas

- ✅ Prefira breadcrumbs **explícitos via `page.meta`**
- ✅ Use `MaybeRef` para títulos vindos de API
- ✅ Marque o último item como `disabled`
- ❌ Evite gerar breadcrumbs automaticamente pela URL

---

## Quando usar esse composable

- Páginas de detalhe (`/entity/[id]`)
- Fluxos administrativos
- Telas onde o título depende de dados assíncronos

---

## Observações finais

Esse padrão é:

- Totalmente tipado
- Compatível com Zod
- Alinhado ao estilo Nuxt / VueUse
- Fácil de evoluir (ex: ícones, permissões, i18n)

Recomendado para projetos médios e grandes onde navegação precisa ser previsível e consistente.
