<script setup lang="ts">
  import z from 'zod'
  import { SpecificationValueReadSchema } from '~/schemas/uge/dto/specification-value.read.dto'
  import type { SpecificationValueRead } from '~/types/uge/specification'

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

  const { fetchAll } = useTableFetch<SpecificationValueRead[]>({
    table: 'specification_values',
    schema: z.array(SpecificationValueReadSchema),
    select: `
    id, value, key_id,
    key: specification_keys (id, name)
    `,
  })
  const demandStatus = await fetchAll()
</script>

<template>
  <ui-page :title="`Home page`">
    <pre>
      {{ demandStatus }}
    </pre>
  </ui-page>
</template>
