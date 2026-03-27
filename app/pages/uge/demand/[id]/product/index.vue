<script setup lang="ts">
  const route = useRoute()
</script>

<template>
  <ui-page show-back title="Lista apenas os produtos neste processo">
    {{ route.params.id }}
    <template #header_action>
      <ui-btn color="primary" icon="plus" to="./new">Novo Processo</ui-btn>
    </template>
  </ui-page>
</template>
