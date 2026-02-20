<script setup lang="ts">
  import type { NotificationType } from '~/types'

  const { notify } = useNotification()
  interface NotificationExample {
    type: NotificationType
    msg: string
    title: string
  }
  const examples: NotificationExample[] = [
    {
      type: 'error',
      msg: 'Erro ao realizar a ação',
      title: 'Erro',
    },
    {
      type: 'success',
      msg: 'Ação concluída com êxito',
      title: 'Sucesso',
    },
    {
      type: 'warning',
      msg: 'Cuidado ao continuar',
      title: 'Atenção',
    },
    {
      type: 'info',
      msg: 'O sistema já está operante',
      title: 'Informação',
    },
  ]
</script>

<template>
  <div>
    <ui-card-grid>
      <ui-btn
        v-for="example in examples"
        :key="example.msg"
        :color="example.type"
        @click="notify(example.msg, example.type)"
        >{{ example.title }}</ui-btn
      >
    </ui-card-grid>

    <ui-card-grid>
      <ui-btn
        color="warning"
        @click="notify('O sistema já está operante', 'warning', { timeout: 5000 })"
        >Informação (5000ms)</ui-btn
      >
    </ui-card-grid>
  </div>
</template>
