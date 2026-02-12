<script setup lang="ts">
  import { AppError } from '~/error/AppError'
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

  const { isCreating, create, fetchAll } = useElection()
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

  const {
    data: elections,
    error,
    status,
  } = useAsyncData('elections', async () => {
    try {
      return await fetchAll()
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, statusMessage: error.message })
      }
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro inesperado ao carregar as eleições',
      })
    }
  })
  const onReset = () => {
    handleReset()
  }
</script>

<template>
  <ui-page show-back title="Eleições">
    <div>
      <ui-btn icon="plus" @click="addElection">Nova Eleição</ui-btn>
    </div>
    <div>
      <ui-card-grid v-if="status === 'pending'"
        ><ui-skeleton-loader :count="SKELETON_LOADER_COUNT.image" type="image" width="350"
      /></ui-card-grid>
      <ui-alert v-else-if="error" :title="error.statusMessage" type="error" />
      <div v-else-if="!elections?.length">
        <ui-alert title="Ainda não há eleições cadastradas" type="warning" />
      </div>
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
  </ui-page>
</template>
