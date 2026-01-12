---
slug: heading
updated: 2026-01-12
---

# UiHeading

O **UiHeading** é um componente de título desacoplado da UI framework. Deve ser utilizado para os vários níveis de títulos.

---

### Como funciona?

O **UiHeading** já vem com níveis, alinhamento e peso, pré definidos. O **UiHeading** abstrai os elementos `<h1>` a` <h6>`, aplicando estilos padronizados conforme o nível, alinhamento e peso informados.

---

### Exemplo

::ui-demo-block
#demo
::demo-heading
::
#code

```vue
<script setup lang="ts">
  import type { HeadingLevel } from '~/types'

  const levels: HeadingLevel[] = [1, 2, 3, 4, 5, 6]
</script>

<template>
  <ui-card-grid>
    <ui-heading v-for="level in levels" :key="level" :level="level">Level {{ level }}</ui-heading>
  </ui-card-grid>
</template>
```

::

## Uso básico

### 1. Adicione o componente no local desejado, e defina as propriedades

Supondo que queira um título, a nível `h2`, em negrito e centralilado:

```vue
<ui-heading :level="2" align="center" weight="bold">Título</ui-heading>
```

### 2. Propriedades

| **Prop** | **Tipo**                        | **Obrigatório**       | **Descrição**                  |
| -------- | ------------------------------- | --------------------- | ------------------------------ |
| level    | 1\|2\|3\|4\|5\|6                | Não (default 2)       | Representa o tamanho do título |
| weight   | 'regular' \| 'medium' \| 'bold' | Não (default regular) | Representa o peso da fonte     |
| align    | 'left'\| 'center' \| 'right'    | Não (default: left)   | Define o alinhamento do título |

### Quando usar

- Título de páginas
- Títulos de cards
- Títulos de artigos

### Quando não usar

- Dentro de menus
- Dentro de navbar

---
