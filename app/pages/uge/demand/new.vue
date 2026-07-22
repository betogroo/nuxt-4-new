<script setup lang="ts">
  import { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
  import type { DemandForm } from '~/schemas/uge/forms/demand.form.schema'
  import { toDemandInsert } from '~/schemas/uge/mappers/demand.mapper'

  const { create } = useDemand()
  const demandToCreate = ref<DemandForm | null>(null)

  const {
    execute,
    status: createStatus,
    error,
  } = useAsyncAction(async () => {
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
      await navigateTo(`/uge/demand/${result.id}`)
    }
  }
</script>

<template>
  <ui-page show-back title="Nova Demanda">
    <ui-alert v-if="error" :title="error.message" type="error" />
    <uge-form-demand :status="createStatus" @submit="createDemand" />
  </ui-page>
</template>
