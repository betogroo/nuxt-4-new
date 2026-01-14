<script setup lang="ts">
  import { ElectionInsertSchema } from '~/schemas'
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Admin - Elections',
      hidden: false,
      areas: ['navbar'],
      priority: 'elections',
      icon: 'election',
    },
  })

  const { elections, fetchAll } = useElection()
  const { isOpen, openDialog } = useDialog()

  const { values, handleSubmit, meta, handleReset } = useZodForm(ElectionInsertSchema, {
    name: '',
  })

  const addElection = () => {
    openDialog()
  }

  const onSubmit = handleSubmit(async () => {
    console.log('Vai Salvar', values)
  })
  const onReset = () => {
    handleReset()
  }

  await fetchAll()
</script>

<template>
  <div>
    <ui-heading :level="3">Eleições</ui-heading>
    <div>
      <ui-btn icon="plus" @click="addElection">Nova Eleição</ui-btn>
    </div>
    <div>
      <div v-if="!elections">Ainda não tem eleições cadastradas</div>
      <ui-card-grid v-else>
        <ui-card
          v-for="item in elections"
          :key="item.id"
          :subtitle="item.date"
          :title="item.name"
          width="350"
        >
          <template #actions>
            <ui-btn color="green" variant="outlined">Editar</ui-btn>
          </template>
        </ui-card>
      </ui-card-grid>
      <ui-dialog v-model="isOpen">
        <ui-form :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
          <ui-text-field name="name" />
        </ui-form>
      </ui-dialog>
    </div>
  </div>
</template>
