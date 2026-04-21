<script setup lang="ts">
  import { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
  import { DemandFormSchema } from '~/schemas/uge/forms/demand.form.schema'
  import type { DemandForm } from '~/types'

  const { create } = useDemand()

  const { select: objectTypeSelect } = useObjectType()

  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandForm>(DemandFormSchema, {
    description: '',
  })

  const { execute, status, error } = useAsyncAction(async () => {
    const parsed = DemandInsertSchema.parse({
      ...values,
      dispute_date: values.dispute_date ?? null,
      electronic_process_number: values.electronic_process_number ?? null,
    })
    return await create(parsed)
  })

  const onSubmit = handleSubmit(async () => {
    try {
      const result = await execute()
      console.log(result)
    } catch (error) {
      handleAsyncError(error)
    }
  })

  const onReset = () => {
    handleReset()
  }
</script>

<template>
  <ui-page show-back title="Nova Demanda">
    <ui-alert v-if="error" :title="error.message" type="error" />
    <ui-form :is-valid="!meta.valid" :status="status" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="description" type="text" />
      <ui-text-field label="Processo Externo" name="electronic_process_number" type="text" />
      <ui-text-field label="Data da Disputa" name="dispute_date" type="date" />

      <ui-select
        item-subtitle="ptres"
        item-title="name"
        :items="objectTypeSelect.items.value || []"
        name="object_types_id"
        placeholder="Escolha a natureza"
        :status="objectTypeSelect.status.value"
        @focus="objectTypeSelect.onOpen"
      />
    </ui-form>
    {{ status }}
  </ui-page>
</template>
