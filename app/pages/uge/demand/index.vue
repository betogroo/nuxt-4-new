<script setup lang="ts">
  import { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
  import type { DemandForm } from '~/types'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Demandas',
      hidden: false,
      icon: 'currency',
      areas: ['navbar'],
      priority: 'demand',
    },
  })

  const { fetchAll, create } = useDemand()
  const { openDialog, isOpen } = useDialog()

  const demandToCreate = ref<DemandForm | null>(null)

  const {
    data: demands,
    error: fetchError,
    status: fetchStatus,
  } = useAsyncData('demands', async () => await fetchAll())
  if (fetchError.value) handleAsyncError(fetchError.value)
  const demandsSafe = computed(() => demands.value ?? [])

  const menuAction = () => {
    alert('vaiparar')
    console.log('Menu Action')
  }
  const { execute, status: createStatus } = useAsyncAction(async () => {
    if (!demandToCreate.value) {
      throw new Error('Dados não informados')
    }
    const parsed = DemandInsertSchema.parse({
      ...demandToCreate.value,
      dispute_date: demandToCreate.value.dispute_date ?? null,
      electronic_process_number: demandToCreate.value.electronic_process_number ?? null,
    })
    return await create(parsed)
  })
  const createDemand = async (data: DemandForm) => {
    demandToCreate.value = data
    const result = await execute()
    await navigateTo(`/uge/demand/${result.id}`)
  }
</script>

<template>
  <ui-page>
    <ui-dialog v-model="isOpen">
      <uge-form-demand :status="createStatus" @submit="createDemand" />
    </ui-dialog>
    <template #header_action
      ><ui-btn color="primary" icon="plus" @click="openDialog">Novo Processo</ui-btn>
    </template>
    <ui-alert v-if="fetchError" :title="fetchError.message" type="error" />

    <ui-list v-else :items="demandsSafe || []" lines="two" :status="fetchStatus">
      <ui-list-item
        v-for="demand in demandsSafe"
        :key="demand.id"
        hide-divider
        :title="demand.description"
        :to="`./demand/${demand.id}`"
        @click="menuAction"
        @menu-click="menuAction"
      >
        <template #subtitle>
          Processo número
          {{ demand.internal_process_number }} Criado por {{ demand.owner?.name || '' }}</template
        >
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>
