<script setup lang="ts">
  import { DemandUpdateSchema } from '~/schemas/uge/dto/demand.update.dto'
  import type { DemandForm } from '~/schemas/uge/forms/demand.form.schema'
  import { toDemandForm, toDemandUpdate } from '~/schemas/uge/mappers/demand.mapper'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Editar',
      hidden: false,
    },
  })

  const route = useRoute()
  const id = computed(() => route.params.id as string)

  const { get, update } = useDemand()

  const demand = await get(id.value)
  const initialValues = computed(() => (demand ? toDemandForm(demand) : undefined))
  const demandToUpdate = ref<DemandForm | null>(null)

  const {
    execute,
    status: updateStatus,
    error,
  } = useAsyncAction(async () => {
    if (!demandToUpdate.value) {
      throw new Error('Dados não informados')
    }

    const updatePayload = toDemandUpdate(demandToUpdate.value)
    const parsed = DemandUpdateSchema.parse(updatePayload)
    return await update(id.value, parsed)
  })

  const editDemand = async (data: DemandForm) => {
    demandToUpdate.value = data
    const result = await execute()

    if (result) {
      await navigateTo(`/uge/demand/${result.id}`)
    }
  }
</script>

<template>
  <ui-page show-back title="Editar Demanda">
    <ui-alert v-if="error" :title="error.message" type="error" />
    <uge-form-demand v-if="demand" :status="updateStatus" :initial-values="initialValues" @submit="editDemand" />
  </ui-page>
</template>

