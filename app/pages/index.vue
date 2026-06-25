<script setup lang="ts">
  import z from 'zod'
  import { DemandStatusReadSchema } from '~/schemas/uge/dto/demand-status.read.dto'
  import type { DemandStatusRead } from '~/types'

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

  const { fetchAll } = useTableFetch<DemandStatusRead[]>({
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
