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
