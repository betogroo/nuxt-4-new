<script setup lang="ts">
  //import { AppError } from '~/error/AppError'
  import { ProductFormSchema, ProductInsertSchema, ProductSchema } from '~/schemas'
  import type { Product, ProductForm, ProductInsert } from '~/types'

  const supabase = useSupabaseClient()

  // const { create, isCreating } = useProduct()

  const { values, handleReset, handleSubmit, meta } = useZodForm<ProductForm>(ProductFormSchema, {
    description: '',
  })

  /* const {
    data: objectTypes,
    error,
    status,
    execute,
  } = useAsyncData(
    'objectTypes',
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
  ) */

  /* const onSelectOpen = (isOpen: boolean) => {
    if (!isOpen) return
    if (status.value !== 'idle') return

    execute()
  } */

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

  const { data: productClass, status: productClassStatus } = useAsyncData(
    'product_class',
    async () => {
      const { data } = await supabase.from('product_class').select('*')
      return data
    },
  )
  const { data: expenseTypes, status: expenseTypesStatus } = useAsyncData(
    'expense_types',
    async () => {
      const { data } = await supabase.from('expense_types').select('*')
      return data
    },
  )

  const isCreating = ref(false)
  const create = async (values: ProductInsert): Promise<Product> => {
    isCreating.value = true
    if (import.meta.dev) {
      await delay(DELAY)
    }

    try {
      const { data: newData, error: dbError } = await supabase
        .from('products')
        .insert(values as never)
        .select()
        .single()
      if (dbError) throw dbError
      return ProductSchema.parse(newData)
    } finally {
      isCreating.value = false
    }
  }

  const onReset = () => {
    handleReset()
  }
</script>

<template>
  <ui-page show-back title="Nova Demanda">
    <ui-form :is-loading="false" :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
      <ui-text-field label="Nome" name="name" type="text" />
      <ui-text-field label="Descrição" name="description" type="text" />
      <ui-text-field label="CAT MAT" name="cat_mat" type="number" />
      <ui-text-field label="CAT BEC" name="cat_bec" type="number" />

      <ui-select
        :disabled="productClassStatus === 'pending'"
        item-subtitle="code"
        item-title="name"
        item-value="id"
        :items="productClass || []"
        name="product_class_id"
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
  </ui-page>
</template>
