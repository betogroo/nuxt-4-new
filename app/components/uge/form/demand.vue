<script setup lang="ts">
  import { DemandFormSchema, type DemandForm } from '~/schemas/uge/forms/demand.form.schema'

  import type { FormProps } from '~/types/ui/form'

  const props = defineProps<FormProps<DemandForm>>()

  const $emit = defineEmits<{
    submit: [DemandForm]
  }>()

  const isObjectTypeLoading = computed(
    () => !!props.initialValues?.object_types_id && objectTypeSelect.status.value === 'pending',
  )

  const { select: objectTypeSelect } = useObjectType()
  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandForm>(DemandFormSchema, {
    description: '',
    ...props.initialValues,
  })

  // Se o form já nasce com um object_types_id (modo edição),
  // carrega a lista antecipadamente pra exibir o título/subtítulo corretos.
  onMounted(() => {
    if (props.initialValues?.object_types_id) {
      objectTypeSelect.onOpen(true)
    }
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
    <ui-skeleton-loader v-if="isObjectTypeLoading" />
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
