<script setup lang="ts">
  //import { AppError } from '~/error/AppError'

  import {
    ExpenseTypeRowsSchema,
    ProductClassRowsSchema,
    ProductFormSchema,
    ProductInsertSchema,
  } from '~/schemas'
  import type { ProductForm } from '~/types'

  const { create, isCreating } = useProduct()
  const { fetchAll: fetchProductClass } = useFetchTable({
    table: 'product_class',
    schema: ProductClassRowsSchema,
  })
  const { fetchAll: fetchExpenseTypes } = useFetchTable({
    table: 'expense_types',
    schema: ExpenseTypeRowsSchema,
  })

  const {
    items: productClasses,
    status: productClassesStatus,
    onOpen: onProductClassesSelectOpen,
  } = useLazySelect('productClasses', fetchProductClass)
  const {
    items: expenseTypes,
    status: expenseTypesStatus,
    onOpen: onExpenseTypesSelectOpen,
  } = useLazySelect('expenseTypes', fetchExpenseTypes)

  const { values, handleReset, handleSubmit, meta } = useZodForm<ProductForm>(ProductFormSchema, {
    description: '',
  })

  const onSubmit = handleSubmit(async () => {
    try {
      const parsed = ProductInsertSchema.parse({
        ...values,
      })
      //const newData = await create(parsed)
      console.log(parsed)
      await create(parsed)
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
  <ui-page show-back title="Nova Produto">
    <ui-form :is-loading="isCreating" :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="name" type="text" />
      <ui-text-field label="Descrição" name="description" type="text" />
      <ui-text-field label="CAT MAT" name="cat_mat" type="number" />
      <ui-text-field label="CAT BEC" name="cat_bec" type="number" />

      <ui-select
        item-subtitle="code"
        item-title="name"
        item-value="id"
        :items="productClasses || []"
        :loading="productClassesStatus === 'pending'"
        name="product_class_id"
        @focus="onProductClassesSelectOpen"
      />
      <ui-select
        item-subtitle="name"
        item-title="expense_number"
        item-value="id"
        :items="expenseTypes || []"
        :loading="expenseTypesStatus === 'pending'"
        name="expense_type_id"
        @focus="onExpenseTypesSelectOpen"
      />
    </ui-form>
  </ui-page>
</template>
