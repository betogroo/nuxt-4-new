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

  const { elections, isCreating, isFetching, create, fetchAll } = useElection()
  const { isOpen, openDialog } = useDialog()
  const { notify } = useNotification()

  const { values, handleSubmit, meta, handleReset } = useZodForm(ElectionInsertSchema, {
    name: '',
  })

  const addElection = () => {
    openDialog()
  }

  const onSubmit = handleSubmit(async () => {
    try {
      const newData = await create(values)
      isOpen.value = false
      notify(`${newData.name} inserido com sucesso`, 'success')
    } catch (error) {
      const err = error as Error
      notify(err.message, 'error')
    }
  })
  const onReset = () => {
    handleReset()
  }

  onMounted(() => {
    fetchAll()
  })
</script>

<template>
  <div>
    <ui-heading :level="3">Eleições</ui-heading>
    <div>
      <ui-btn icon="plus" @click="addElection">Nova Eleição</ui-btn>
    </div>
    <div>
      <div v-if="isFetching">Carregando</div>
      <div v-else-if="!elections?.length">Ainda não tem eleições cadastradas</div>
      <ui-card-grid v-else>
        <voting-election-card
          v-for="election in elections"
          :key="election.id"
          :election="election"
        />
      </ui-card-grid>
      <ui-dialog v-model="isOpen">
        <ui-form
          :is-loading="isCreating"
          :is-valid="!meta.valid"
          @reset="onReset"
          @submit="onSubmit"
        >
          <ui-text-field name="name" type="text" />
          <ui-text-field name="date" type="date" />
        </ui-form>
      </ui-dialog>
    </div>
  </div>
</template>
