<script setup lang="ts">
  //import { AppError } from '~/error/AppError'
  import { AppError } from '~/error/AppError'
  import { ProductFormSchema, ProductInsertSchema } from '~/schemas'
  import type { ProductForm } from '~/types'

  const supabase = useSupabaseClient()

  const { create, isCreating } = useProduct()
  const { fetchAll } = useProductClass()

  const { values, handleReset, handleSubmit, meta } = useZodForm<ProductForm>(ProductFormSchema, {
    description: '',
  })

  const {
    data: productClasses,
    error,
    status: productClassesStatus,
    execute,
  } = useAsyncData(
    'product_classes',
    async () => {
      try {
        return await fetchAll()
      } catch (error) {
        if (error instanceof AppError) {
          throw createError({ statusCode: 400, message: error.message })
        }
        throw createError({
          statusCode: 500,
          message: 'Erro inesperado ao carregar as demandas',
        })
      }
    },
    { immediate: false },
  )

  const onSelectOpen = (isOpen: boolean) => {
    if (!isOpen) return
    if (productClassesStatus.value !== 'idle') return

    execute()
  }

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

  const { data: expenseTypes, status: expenseTypesStatus } = useAsyncData(
    'expense_types',
    async () => {
      const { data } = await supabase.from('expense_types').select('*')
      return data
    },
  )

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
        @focus="onSelectOpen"
      />
      <ui-select
        :disabled="expenseTypesStatus === 'pending'"
        item-subtitle="name"
        item-title="expense_number"
        item-value="id"
        :items="expenseTypes || []"
        name="expense_type_id"
      />
    </ui-form>
    <ui-alert v-if="error" :title="error.message" type="error" />
  </ui-page>
</template>
