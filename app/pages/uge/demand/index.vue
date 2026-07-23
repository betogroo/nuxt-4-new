<script setup lang="ts">
  import { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
  import type { DemandForm } from '~/schemas/uge/forms/demand.form.schema'
  import { toDemandInsert } from '~/schemas/uge/mappers/demand.mapper'

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

  const router = useRouter()

  const { fetchAll, create } = useDemand()
  const { openDialog, isOpen, closeDialog } = useDialog()

  const demandToCreate = ref<DemandForm | null>(null)

  const {
    data: demands,
    error: fetchError,
    status: fetchStatus,
    refresh,
  } = useAsyncData('demands', async () => await fetchAll())
  if (fetchError.value) handleAsyncError(fetchError.value)
  const demandsSafe = computed(() => demands.value ?? [])

  const { execute, status: createStatus } = useAsyncAction(async () => {
    if (!demandToCreate.value) {
      throw new Error('Dados não informados')
    }
    const insertPayload = toDemandInsert(demandToCreate.value)

    const parsed = DemandInsertSchema.parse(insertPayload)
    return await create(parsed)
  })
  const createDemand = async (data: DemandForm) => {
    demandToCreate.value = data
    const result = await execute()
    // option 1 redirect
    //await navigateTo(`/uge/demand/${result.id}`)
    // option 2 refresh
    if (result) {
      closeDialog()
      refresh()
    }
  }

  const deleteDemand = (id: string) => {
    alert(`Vai parar ${id}`)
    console.log('Menu Action')
  }
  const editDemand = (id: string) => {
    router.push(`./demand/${id}/edit`)
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
      >
        <template #subtitle>
          Processo número
          {{ demand.internal_process_number }} Criado por {{ demand.owner?.name || '' }}</template
        >
        <template #actions>
          <ui-card-grid>
            <ui-btn-icon icon="delete" @click.stop.prevent="deleteDemand(demand.id)" />
            <ui-btn-icon icon="edit" @click.stop.prevent="editDemand(demand.id)" />
          </ui-card-grid>
        </template>
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>
