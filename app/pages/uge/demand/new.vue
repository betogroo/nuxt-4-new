<script setup lang="ts">
  import { DemandFormSchema, DemandInsertSchema, ObjectTypeRowsSchema } from '~/schemas'
  import type { DemandForm, ObjectType } from '~/types'

  const { create, isCreating } = useDemand()

  const { fetchAll: fetchObjectTypes } = useTableFetch<ObjectType[]>({
    table: 'object_types',
    schema: ObjectTypeRowsSchema,
  })
  const {
    items: objectTypes,
    status: objectTypesStatus,
    onOpen: onObjectTypesSelectOpen,
  } = useLazySelect('objectTypes', fetchObjectTypes)

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
</script>

<template>
  <ui-page show-back title="Nova Demanda">
    <ui-form :is-loading="isCreating" :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="description" type="text" />
      <ui-text-field label="Processo Externo" name="electronic_process_number" type="text" />
      <ui-text-field label="Data da Disputa" name="dispute_date" type="date" />

      <ui-select
        item-subtitle="ptres"
        item-title="name"
        :items="objectTypes || []"
        name="object_types_id"
        placeholder="Escolha a natureza"
        :status="objectTypesStatus"
        @focus="onObjectTypesSelectOpen"
      />
    </ui-form>
  </ui-page>
</template>
