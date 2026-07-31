<script setup lang="ts">
  import { ProductFormSchema, type ProductForm } from '~/schemas/uge/forms/product.form.schema'
  import type { FormProps } from '~/schemas/ui/form'

  const props = defineProps<FormProps<ProductForm>>()
  const $emit = defineEmits<{
    submit: [ProductForm]
  }>()

  const { select: productClassSelect } = useProductClass()
  const { select: expenseTypeSelect } = useExpenseType()

  const { values, handleReset, handleSubmit, meta } = useZodForm<ProductForm>(ProductFormSchema, {
    description: '',
    ...props.initialValues,
  })

  //const isEditMode = computed(() => !!props.initialValues)

  // Sempre inicia a busca dos selects (tanto criação quanto edição)
  onMounted(() => {
    //if (isEditMode.value) {
    productClassSelect.fetch()
    expenseTypeSelect.fetch()
    //}
  })

  watch(
    () => props.initialValues,
    (newValues) => {
      if (newValues?.product_class_id) {
        productClassSelect.fetch()
      }
    },
    { immediate: true, deep: true },
  )
  watch(
    () => props.initialValues,
    (newValues) => {
      if (newValues?.expense_type_id) {
        expenseTypeSelect.fetch()
      }
    },
    { immediate: true, deep: true },
  )

  const onSubmit = handleSubmit(() => {
    $emit('submit', { ...values })
  })

  console.log(props.initialValues)
</script>

<template>
  <ui-form :is-valid="!meta.valid" :status="status" @reset="handleReset" @submit="onSubmit">
    <ui-text-field label="Nome" name="name" type="text" />
    <ui-text-field label="Descrição" name="description" type="text" />
    <ui-text-field label="CAT MAT" name="cat_mat" type="number" />
    <ui-text-field label="CAT BEC" name="cat_bec" type="number" />

    <ui-select
      item-subtitle="code"
      item-title="name"
      item-value="id"
      :items="productClassSelect.items.value || []"
      name="product_class_id"
      placeholder="Escolha a classe"
      :status="productClassSelect.status.value"
      @focus="productClassSelect.onOpen"
    />
    <ui-select
      item-subtitle="name"
      item-title="expense_number"
      item-value="id"
      :items="expenseTypeSelect.items.value || []"
      name="expense_type_id"
      placeholder="Escolha o Tipo"
      :status="expenseTypeSelect.status.value"
      @focus="expenseTypeSelect.onOpen"
    />
  </ui-form>
</template>
