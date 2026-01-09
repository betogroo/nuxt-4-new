---
slug: notification
---

# UiNotification

> Componente global responsável por exibir mensagens temporárias de feedback ao usuário, como sucesso, erro, aviso ou informação.

- Não depende diretamente do Vuetify no uso
- Centraliza notificações da aplicação
- Pode ser acionado de qualquer lugar (pages, components, stores, composables)

### Como funciona?

> O UiNotification é um componente `global` que escuta um estado centralizado (store) e exibe notificações sempre que esse estado é acionado.
> O desenvolvedor interage apenas através de um composable (useNotification), sem acessar o componente diretamente.

**`Nunca chame o componente, sempre chame o composable.`**

### Exemplos

::ui-demo-block
#demo
::demo-notification
::
#code

```vue
<script setup lang="ts">
  const { notify } = useNotification()
</script>
<template>
  <ui-card-grid>
    <ui-btn color="error" @click="notify('Erro ao realizar a ação', 'error')">Erro</ui-btn>
    <ui-btn color="success" @click="notify('Ação concluída com êxito', 'success')">Sucesso</ui-btn>
    <ui-btn color="warning" @click="notify('Cuidado ao continuar', 'warning')">Atenção</ui-btn>
    <ui-btn color="info" @click="notify('O sistema já está operante', 'info')">Informação</ui-btn>
    <ui-btn
      color="warning"
      @click="notify('O sistema já está operante', 'warning', { timeout: 5000 })"
    >
      Informação (5000ms)
    </ui-btn>
  </ui-card-grid>
</template>
```

::

### Setup

> Apenas adicione o componente no App.vue, para que seja sempre global. Não é necessária nenhuma importação, nem adicionar propriedades.

```vue
<!-- App.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
    <NuxtRouteAnnouncer />
    <UiNotification />
  </NuxtLayout>
</template>
```

### API pública

```ts
notify(
  text: string,
  type: 'success' | 'error' | 'warning' | 'info',
  options?: {
    timeout?: number
  }
)
```

> Para utilizar, basta utilizar o composable `useNotification`:

```ts
const { notify } = useNotification()
notify('Salvo com sucesso', 'success')
```

- Primeiro argumento (obrigatório): A mensagem que a notificação apresentará
- Segundo argumento (obrigatório): O tipo de notificação, conforme tabela a seguir:

| Tipo      | Quando usar                    |
| --------- | ------------------------------ |
| `success` | Operações concluídas com êxito |
| `error`   | Falhas ou erros inesperados    |
| `warning` | Ações que exigem atenção       |
| `info`    | Informações neutras            |

### Opções Adicionais

```ts
notify('Sessão expirada', 'warning', {
  timeout: 5000,
})
```

| Opção   | Tipo   | Padrão | Descrição                                                  |
| ------- | ------ | ------ | ---------------------------------------------------------- |
| timeout | number | 2000ms | Tempo em milissegundos que a notificação permanece visível |
