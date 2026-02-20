<script setup lang="ts">
  const { openDialog, isOpen } = useDialog()
</script>

<template>
  <div>
    <ui-card-grid>
      <ui-btn color="primary" @click="openDialog"> Abrir diálogo </ui-btn>
    </ui-card-grid>

    <ui-dialog v-model="isOpen" title="Confirmação" title-icon="update">
      Tem certeza que deseja realizar esta ação?
    </ui-dialog>
  </div>
</template>
