<script setup lang="ts">
  import { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
  import { ProductFormSchema } from '~/schemas/uge/forms/product.form.schema'
  import type { ProductForm } from '~/types'

  const { create } = useProduct()
  const { select: productClassSelect } = useProductClass()
  const { select: expenseTypeSelect } = useExpenseType()

  const { values, handleReset, handleSubmit, meta } = useZodForm<ProductForm>(ProductFormSchema, {
    description: '',
  })

  const { execute, status, error } = useAsyncAction(async () => {
    const parsed = ProductInsertSchema.parse({
      ...values,
    })

    return await create(parsed)
  })

  const onSubmit = handleSubmit(async () => {
    try {
      await execute()
    } catch (error) {
      handleAsyncError(error)
    }
  })

  const onReset = () => {
    handleReset()
  }
</script>

<template>
  <ui-page show-back title="Nova Produto">
    <ui-form :is-valid="!meta.valid" :status="status" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="name" type="text" />
      <ui-text-field label="Descrição" name="description" type="text" />
      <ui-text-field label="CAT MAT" name="cat_mat" type="number" />
      <ui-text-field label="CAT BEC" name="cat_bec" type="number" />

      <ui-select
        item-subtitle="code"
        item-title="name"
        item-value="id"
        :items="productClassSelect.items.value || []"
        mode="autocomplete"
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
        mode="autocomplete"
        name="expense_type_id"
        placeholder="Escolha o Tipo"
        :status="expenseTypeSelect.status.value"
        @focus="expenseTypeSelect.onOpen"
      />
    </ui-form>
    {{ status }},{{ error }}
  </ui-page>
</template>
