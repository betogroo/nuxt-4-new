<script setup lang="ts">
  import { DemandStatusReadSchema, z } from '~/schemas'
  import type { DemandStatus } from '~/types'

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

  const { fetchAll } = useTableFetch<DemandStatus[]>({
    table: 'demand_status',
    schema: z.array(DemandStatusReadSchema),
    orderBy: [{ column: 'sort_order' }],
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
