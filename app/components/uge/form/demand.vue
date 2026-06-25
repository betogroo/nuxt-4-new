<script setup lang="ts">
  import { DemandFormSchema } from '~/schemas/uge/forms/demand.form.schema'
  import type { DemandForm } from '~/types/uge/demand'
  import type { FormProps } from '~/types/ui/form'

  defineProps<FormProps>()

  const $emit = defineEmits<{
    submit: [DemandForm]
  }>()
  const { select: objectTypeSelect } = useObjectType()
  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandForm>(DemandFormSchema, {
    description: '',
  })

  const onSubmit = handleSubmit(() => {
    $emit('submit', { ...values })
  })
</script>
<template>
  <ui-form :is-valid="!meta.valid" :status="status" @reset="handleReset" @submit="onSubmit">
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
</template>
