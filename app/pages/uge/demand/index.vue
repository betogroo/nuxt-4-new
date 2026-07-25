<script setup lang="ts">
  import { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
  import type { DemandReadDetail } from '~/schemas/uge/dto/demand.read.dto'
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

  const { fetchAll, create, remove, isDeleting } = useDemand()
  const { notify } = useNotification()
  const { openDialog, isOpen, closeDialog } = useDialog()
  const {
    openDialog: openDeleteDialog,
    isOpen: isDeleteDialogOpen,
    closeDialog: closeDeleteDialog,
  } = useDialog()

  const demandToCreate = ref<DemandForm | null>(null)
  const selectedDemandToDelete = ref<DemandReadDetail | null>(null)

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
    if (result) {
      notify('Demanda criada com sucesso', 'success')
      closeDialog()
      refresh()
    }
  }

  const { execute: executeDelete, status: deleteStatus } = useAsyncAction(async () => {
    if (!selectedDemandToDelete.value) {
      throw new Error('Demanda não selecionada')
    }
    return await remove(selectedDemandToDelete.value.id)
  })

  const confirmDeleteDemand = (demand: DemandReadDetail) => {
    selectedDemandToDelete.value = demand
    openDeleteDialog()
  }

  const handleDelete = async () => {
    if (!selectedDemandToDelete.value) return
    const deletedDemandName = selectedDemandToDelete.value.description
    const result = await executeDelete()
    if (result) {
      notify(`Demanda "${deletedDemandName}" excluída com sucesso`, 'success')
      closeDeleteDialog()
      selectedDemandToDelete.value = null
      refresh()
    } else {
      notify('Erro ao excluir a demanda', 'error')
    }
  }

  const editDemand = (id: string) => {
    router.push(`./demand/${id}/edit`)
  }
</script>

<template>
  <ui-page>
    <!-- Dialog de Criação -->
    <ui-dialog v-model="isOpen">
      <uge-form-demand :status="createStatus" @submit="createDemand" />
    </ui-dialog>

    <!-- Dialog de Confirmação de Exclusão -->
    <ui-dialog
      v-model="isDeleteDialogOpen"
      title="Confirmar Exclusão"
      title-icon="delete"
      size="small"
    >
      Tem certeza que deseja excluir a demanda
      <strong>"{{ selectedDemandToDelete?.description }}"</strong>?
      <template #actions>
        <v-spacer />
        <ui-btn variant="text" :disabled="isDeleting" @click="closeDeleteDialog">Cancelar</ui-btn>
        <ui-btn color="error" :loading="isDeleting" @click="handleDelete">Excluir</ui-btn>
      </template>
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
            <ui-btn-icon icon="delete" @click.stop.prevent="confirmDeleteDemand(demand)" />
            <ui-btn-icon icon="edit" @click.stop.prevent="editDemand(demand.id)" />
          </ui-card-grid>
        </template>
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>

