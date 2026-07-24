<script setup lang="ts">
  import type { DemandForm } from '~/schemas/uge/forms/demand.form.schema'
  import { toDemandForm } from '~/schemas/uge/mappers/demand.mapper'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Editar',
      hidden: false,
    },
  })

  const route = useRoute()
  const id = computed(() => route.params.id as string)

  const { get } = useDemand()

  const demand = await get(id.value)
  const initialValues = computed(() => (demand ? toDemandForm(demand) : undefined))

  const editDemand = async (data: DemandForm) => {
    console.log(id.value, data)
  }
</script>

<template>
  <ui-page title="Editar"
    >Vai editar o item {{ id }}
    <code>{{ demand }}</code>
    <pre>{{ initialValues }}</pre>

    <uge-form-demand v-if="demand" :initial-values="initialValues" @submit="editDemand" />
  </ui-page>
</template>
