<script setup lang="ts">
  import z from 'zod'
  import { SpecificationKeyReadSchema } from '~/schemas/uge/dto/specification-key.read.dto'
  import type { SpecificationKeyRead } from '~/types/uge/specification'

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

  const { fetchAll } = useTableFetch<SpecificationKeyRead[]>({
    table: 'specification_keys',
    schema: z.array(SpecificationKeyReadSchema),
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
