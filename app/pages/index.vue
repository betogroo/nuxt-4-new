<script setup lang="ts">
  import z from 'zod'
  import { ProductClassReadSchema, ProductSummarySchema } from '~/schemas'

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
    schema: z.array(ProductSummarySchema),
    select: `
      name, description,
      class:product_class(name, code)
    `,
  })
  const { fetchAll: fetchProductClasses } = useTableFetch({
    table: 'product_class',
    schema: z.array(ProductClassReadSchema),
  })
  const products = await fetchProducts()
  const classes = await fetchProductClasses()
</script>

<template>
  <ui-page :title="`Home page`">
    <pre>
      {{ products }}
    </pre>
    <pre>
      {{ classes }}
    </pre>
  </ui-page>
</template>
