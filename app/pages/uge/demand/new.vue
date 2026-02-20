<script setup lang="ts">
  import { DemandFormSchema, DemandInsertSchema } from '~/schemas'
  import type { DemandForm } from '~/types'

  const { create, isCreating } = useDemand()

  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandForm>(DemandFormSchema, {
    description: '',
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

  const items = [
    {
      id: 1,
      name: 'Material de Consumo',
      ptres: '180205',
    },
    {
      id: 2,
      name: 'Material Permanente',
      ptres: '180211',
    },
  ]
</script>

<template>
  <ui-page show-back title="Nova Demanda">
    <ui-form :is-loading="isCreating" :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="description" type="text" />
      <ui-text-field label="Processo Externo" name="electronic_process_number" type="text" />
      <ui-text-field label="Data da Disputa" name="dispute_date" type="date" />

      <ui-select :items="items" name="object_types_id" />
    </ui-form>
  </ui-page>
</template>
