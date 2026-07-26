<script setup lang="ts">
  import { ProductFormSchema, type ProductForm } from '~/schemas/uge/forms/product.form.schema'
  import type { FormProps } from '~/schemas/ui'

  const props = defineProps<FormProps<ProductForm>>()
  const $emit = defineEmits<{
    submit: [ProductForm]
  }>()

  const { select: productClassSelect } = useProductClass()
  const { select: expenseTypeSelect } = useExpenseType()

  const { values, handleReset, handleSubmit, meta, setFieldValue } = useZodForm<ProductForm>(
    ProductFormSchema,
    {
      description: '',
      ...props.initialValues,
    },
  )

  const isEditMode = computed(() => !!props.initialValues?.product_class_id)

  // Sempre inicia a busca dos selects (tanto criação quanto edição)
  onMounted(() => {
    productClassSelect.fetch()
    expenseTypeSelect.fetch()
  })

  // Quando os itens do select de classe chegarem E estivermos em modo edição,
  // reaplica o valor salvo para forçar o VSelect a exibir o item correto
  watch(productClassSelect.items, (items) => {
    if (isEditMode.value && items && items.length > 0) {
      const savedId = props.initialValues?.product_class_id
      if (savedId) {
        const match = items.find((i) => i.id === savedId)
        if (match) setFieldValue('product_class_id', savedId)
      }
    }
  })

  watch(expenseTypeSelect.items, (items) => {
    if (isEditMode.value && items && items.length > 0) {
      const savedId = props.initialValues?.expense_type_id
      if (savedId) {
        const match = items.find((i) => i.id === savedId)
        if (match) setFieldValue('expense_type_id', savedId)
      }
    }
  })

  const onSubmit = handleSubmit(() => {
    $emit('submit', { ...values })
  })
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
