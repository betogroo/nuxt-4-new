---
slug: dialog
updated: 2026-01-09
---

# UiDialog

O **UiDialog** é um componente de diálogo desacoplado da UI framework, controlado exclusivamente por um **composable**.

Ele deve ser utilizado para confirmações, alertas ou qualquer interação que exija a atenção do usuário.

---

### Como funciona?

O controle de abertura e fechamento do diálogo **não é feito diretamente no componente**, mas sim através do composable `useDialog`.

Isso garante:

- Desacoplamento da UI
- Centralização do estado
- Facilidade de reutilização
- Padronização de comportamento

**`Nunca controle o diálogo diretamente via props locais, sempre chame o composable.`**

---

### Exemplo

::ui-demo-block
#demo
::demo-dialog
::
#code

```vue
<script setup lang="ts">
  const { openDialog, isOpen } = useDialog()
</script>

<template>
  <ui-btn @click="openDialog"> Abrir diálogo </ui-btn>

  <ui-dialog v-model="isOpen" title="Confirmação" title-icon="update">
    Tem certeza que deseja realizar esta ação?
  </ui-dialog>
</template>
```

::

## Uso básico

### 1. Utilize o composable

```ts
const { openDialog, isOpen } = useDialog()
```

### 2. Adicione o componente na página

```
<ui-dialog
  v-model="isOpen"
  title="Confirma"
  title-icon="update"
>
  Aqui é o texto do Dialog
</ui-dialog>
```

### 3. Abra o diálogo via código

```
openDialog()
```

### API pública

useDialog()

Retorna as propriedades e métodos necessários para controlar o diálogo.

```
const {
  isOpen,
  openDialog,
  closeDialog
} = useDialog()
```

| Propriedade / Método | Tipo           | Descrição                          |
| -------------------- | -------------- | ---------------------------------- |
| `isOpen`             | `Ref<boolean>` | Controla a visibilidade do diálogo |
| `openDialog`         | `() => void`   | Abre o diálogo                     |
| `closeDialog`        | `() => void`   | Fecha o diálogo                    |

### Props do UiDialog

| Prop         | Tipo      | Obrigatório | Descrição                       |
| ------------ | --------- | ----------- | ------------------------------- |
| `v-model`    | `boolean` | sim         | Controla a abertura do diálogo  |
| `title`      | `string`  | sim         | Título exibido no topo          |
| `title-icon` | `string`  | não         | Ícone exibido ao lado do título |

### Conteúdo do diálogo

O conteúdo do diálogo é passado via slot padrão:

```
<ui-dialog v-model="isOpen" title="Confirma">
  Tem certeza que deseja continuar?
</ui-dialog>
```

Boas práticas

- ✅ Utilize sempre o useDialog
- ❌ Não controle o estado localmente
- ❌ Não acople lógica de negócio dentro do componente
- ✅ Use o slot para conteúdo flexível

### Quando usar

- Confirmação de ações
- Alertas importantes
- Fluxos que exigem decisão do usuário

### Quando não usar

- Mensagens rápidas (use UiNotification)
- Feedback não bloqueante
- Informações passivas

---
