---
slug: btn
updated: 2026-01-09
---

# UiBtn

Componente que representa um botão, utilizado tanto para eventos quanto para a envio de formulários. Baseado no v-btn do Vuetify, porém mais enxuto quanto às propriedades

- Não depende diretamente do Vuetify no uso
- Apenas propriedades necessárias
- Tanto para `submit` quanto para `click`

---

### Como funciona?

O **UiBtn** é um componente `global` que escuta um estado centralizado (store) e exibe notificações sempre que esse estado é acionado.
O desenvolvedor interage apenas através de um composable (useNotification), sem acessar o componente diretamente.

---

### Exemplos

::ui-demo-block
#demo
::demo-btn
::
#code

```vue
<script setup lang="ts">
  const { isOpen, openDialog } = useDialog()
  const dialogText = ref('')
  const onClick = () => {
    dialogText.value = 'O botão foi clicado'
    openDialog()
  }
  const onSubmit = () => {
    dialogText.value = 'Formulário foi enviado'
    openDialog()
  }
</script>

<template>
  <ui-card-grid
    ><ui-btn @click="onClick"> Padrão</ui-btn>
    <ui-btn color="primary" @click="onClick">Primary</ui-btn>
    <ui-btn color="primary" disabled @click="onClick">Disabled</ui-btn>
    <ui-btn color="error" loading @click="onClick">Loading</ui-btn>
    <ui-btn color="success" icon="plus" @click="onClick">Adicionar</ui-btn>
    <ui-dialog v-model="isOpen"> {{ dialogText }}</ui-dialog>
    <v-form @submit.prevent="onSubmit">
      <ui-btn color="primary" type="submit">Submit</ui-btn>
    </v-form>
  </ui-card-grid>
</template>
```

::

### Setup

Não são necessárias configurações. Apenas adicione o componente no local desejado para uso

```vue
<!-- App.vue -->
<template>
  <div><ui-bn>Enviar</ui-btn></div>
</template>
```
