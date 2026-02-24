<script setup lang="ts">
  import { AppError } from '~/error/AppError'
  import { DemandFormSchema, DemandInsertSchema } from '~/schemas'
  import type { DemandForm } from '~/types'

  const { create, isCreating } = useDemand()
  const { fetchAll } = useDemandObjectType()

  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandForm>(DemandFormSchema, {
    description: '',
  })

  const {
    data: objectTypes,
    error,
    status,
  } = useAsyncData('objectTypes', async () => {
    try {
      return await fetchAll()
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, statusMessage: error.message })
      }
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro inesperado ao carregar as demandas',
      })
    }
  })

  const onSubmit = handleSubmit(async () => {
    try {
      const parsed = DemandInsertSchema.parse({
        ...values,
        dispute_date: values.dispute_date ?? null,
        electronic_process_number: values.electronic_process_number ?? null,
      })
      const newData = await create(parsed)
      console.log(newData)
    } catch (error) {
      const err = error as Error
      console.log(err)
    }
  })

  const onReset = () => {
    handleReset()
  }
</script>

<template>
  <ui-page show-back title="Nova Demanda">
    <ui-form :is-loading="isCreating" :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="description" type="text" />
      <ui-text-field label="Processo Externo" name="electronic_process_number" type="text" />
      <ui-text-field label="Data da Disputa" name="dispute_date" type="date" />

      <ui-select
        :disabled="status === 'pending'"
        item-subtitle="ptres"
        item-title="name"
        :items="objectTypes || []"
        label="Selecione uma categoria"
        :loading="status === 'pending'"
        name="object_types_id"
      />
    </ui-form>
    <ui-alert v-if="error" :title="error.statusMessage" type="error" />
    {{ status }}
  </ui-page>
</template>
