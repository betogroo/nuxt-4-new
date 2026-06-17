<script setup lang="ts">
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

  const { fetchAll } = useDemand()
  const { openDialog, isOpen } = useDialog()
  //const { create } = useDemand()
  const { data: demands, error } = useAsyncData('demands', async () => await fetchAll())
  if (error.value) handleAsyncError(error.value)
  const demandsSafe = computed(() => demands.value ?? [])

  const menuAction = () => {
    alert('vaiparar')
    console.log('Menu Action')
  }
  const createDemand = (data: DemandForm) => {
    console.log(data)
  }
</script>

<template>
  <ui-page>
    <ui-dialog v-model="isOpen">
      <uge-form-demand status="idle" @submit="createDemand" />
    </ui-dialog>
    <template #header_action
      ><ui-btn color="primary" icon="plus" @click="openDialog">Novo Processo</ui-btn>
    </template>
    <ui-alert v-if="error" :title="error.message" type="error" />

    <ui-list v-else :items="demandsSafe || []" lines="two" status="idle">
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
    {{ error }}
  </ui-page>
</template>
