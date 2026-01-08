<script setup lang="ts">
  const { notify } = useNotification()
</script>

<template>
  <div>
    <ui-btn color="error" @click="notify('Erro ao realizar a ação', 'error')">Erro</ui-btn>
    <ui-btn color="success" @click="notify('Ação concluída com êxito', 'success')">Sucesso</ui-btn>
    <ui-btn color="warning" @click="notify('Cuidado ao continuar', 'warning')">Atenção</ui-btn>
    <ui-btn color="info" @click="notify('O sistema já está operante', 'info')">Informação</ui-btn>
    <ui-btn
      color="warning"
      @click="notify('O sistema já está operante', 'warning', { timeout: 5000 })"
      >Informação (5000ms)</ui-btn
    >
  </div>
</template>
