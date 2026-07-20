---
slug: menu-item
updated: 2026-07-20
---

# UiMenuItem

Componente de abstração para o `v-list-item` do Vuetify.

O objetivo deste componente é padronizar os itens de listas e menus da aplicação, expondo apenas as propriedades necessárias e evitando o acoplamento direto com a API do Vuetify.

---

### Exemplo

::ui-demo-block
#demo
::demo-menu-item
::
#code

```vue
<script setup lang="ts">
  const click = () => {
    alert('Clicou')
  }
</script>
<template>
  <ui-menu-item
    append="Fim"
    base-color="red"
    icon="currency"
    icon-color="black"
    shape="pill"
    @onclick="click"
  />
  <ui-menu-item base-color="primary" icon="currency" shape="pill" title="Fim" @onclick="click" />
</template>
```

::

## Props

| Prop        | Tipo                                                                 | Padrão       | Descrição                                                                                  |
| ----------- | -------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| `title`     | `string`                                                             | —            | Texto principal do item. Obrigatório quando `append` não for informado.                    |
| `append`    | `string`                                                             | —            | Conteúdo exibido no slot `append`. Obrigatório quando `title` não for informado.           |
| `icon`      | `Icon`                                                               | `undefined`  | Ícone exibido no início do item.                                                           |
| `iconColor` | `string`                                                             | `undefined`  | Cor aplicada ao ícone.                                                                     |
| `shape`     | `'default' \| 'pill'`                                                | `'default'`  | Define o formato do item.                                                                  |
| `variant`   | `'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain'` | `'outlined'` | Variante visual do item.                                                                   |
| `onClick`   | `() => void`                                                         | `undefined`  | Reservado para compatibilidade de tipagem. O clique é emitido através do evento `onclick`. |

---

## Eventos

| Evento    | Descrição                        |
| --------- | -------------------------------- |
| `onclick` | Emitido quando o item é clicado. |

---

## Slots

O componente não expõe slots públicos.

Internamente utiliza os slots `prepend`, `title` e `append` do `v-list-item`.

---

## Atributos

Todos os atributos não declarados são encaminhados automaticamente para o `v-list-item` através de `v-bind="$attrs"`.

Isso permite utilizar propriedades nativas do Vuetify, como:

- `to`
- `href`
- `value`
- `active`
- `disabled`
- `density`
- entre outras.

---

## Regras

### `title` e `append` são mutuamente exclusivos

O componente exige que apenas um deles seja informado.

✔ Correto

```vue
<ui-menu-item title="Dashboard" />
```

```vue
<ui-menu-item append="Ctrl + S" />
```

❌ Incorreto

```vue
<ui-menu-item title="Salvar" append="Ctrl + S" />
```

---

## Exemplos

### Item simples

```vue
<ui-menu-item title="Configurações" />
```

---

### Com ícone

```vue
<ui-menu-item icon="mdi:cog" title="Configurações" />
```

---

### Ícone colorido

```vue
<ui-menu-item icon="mdi:delete" icon-color="error" title="Excluir" />
```

---

### Formato Pill

```vue
<ui-menu-item title="Início" shape="pill" />
```

---

### Variante Flat

```vue
<ui-menu-item title="Perfil" variant="flat" />
```

---

### Exibindo conteúdo no append

```vue
<ui-menu-item append="Ctrl + N" />
```

---

### Navegação

```vue
<ui-menu-item title="Produtos" to="/products" />
```

---

### Evento de clique

```vue
<ui-menu-item title="Sair" @onclick="logout" />
```

---

## Quando utilizar

Utilize `UiMenuItem` sempre que for necessário representar um item de:

- menus laterais;
- listas de navegação;
- menus suspensos;
- listas de ações.

O componente garante consistência visual entre os itens e reduz o acoplamento da aplicação ao `v-list-item` do Vuetify.
