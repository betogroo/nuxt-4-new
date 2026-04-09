<script setup lang="ts">
  import z from 'zod'
  import { ProductClassReadSchema, ProductReadDetailsSchema } from '~/schemas'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Sobre',
      hidden: false,
      areas: ['navbar', 'drawer'],
      icon: 'about',
      priority: 'about',
    },
  })

  const { fetchAll: fetchProducts } = useTableFetch({
    table: 'products',
    schema: z.array(ProductReadDetailsSchema),
    select: `
      id, name, description,
      class:product_class(name, code)
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
  <ui-page :title="`About Page`">
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
