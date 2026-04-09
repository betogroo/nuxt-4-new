<script setup lang="ts">
  import z from 'zod'
  import { ProductClassReadSchema, ProductReadDetailsSchema } from '~/schemas'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'home',
      priority: 'index',
    },
  })

  const { fetchAll: fetchProducts } = useTableFetch({
    table: 'products',
    schema: z.array(ProductReadDetailsSchema),
    select: `
      id, name, description,cat_mat, cat_bec,nat_gov,pdm,specifications,active,
      class:product_class(name, code),
      expense_type:expense_types(name, expense_number)
    `,
  })
  const { fetchAll: fetchProductClasses } = useTableFetch({
    table: 'product_class',
    schema: z.array(ProductClassReadSchema),
  })
  const products = await fetchProducts()
  const classes = await fetchProductClasses()

  //const supabase = useSupabaseClient()

  const { fetchAll } = useTableFetch({
    table: 'product_detail',
    schema: z.array(ProductReadDetailsSchema),
  })

  const testView = await fetchAll()
</script>

<template>
  <ui-page :title="`Home page`">
    <pre>
      {{ products }}
    </pre>
    <pre>
      {{ classes }}
    </pre>
    <pre>
      {{ testView }}
    </pre>
  </ui-page>
</template>
