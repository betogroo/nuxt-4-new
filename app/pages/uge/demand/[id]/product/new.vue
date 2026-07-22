<script setup lang="ts">
  import { DemandItemInsertSchema } from '~/schemas/uge/dto/demand-item.insert.dto'
  import type { DemandItemForm } from '~/schemas/uge/forms/demand-item.form.schema'
  import { toDemandItemInsert } from '~/schemas/uge/mappers/demand-item.mapper'

  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const demandItemToAdd = ref<DemandItemForm | null>(null)

  const { create } = useDemandItem()

  const { execute, status } = useAsyncAction(async () => {
    if (!demandItemToAdd.value) {
      throw new Error('Dados não informados')
    }
    const insertPayload = toDemandItemInsert(demandItemToAdd.value, { demandId: id.value })
    const parsed = DemandItemInsertSchema.parse(insertPayload)
    return await create(parsed)
  })

  const addItem = async (data: DemandItemForm) => {
    demandItemToAdd.value = data
    await execute()
    await navigateTo(`/uge/demand/${id.value}`)
  }
</script>

<template>
  <ui-page show-back title="Adicionar produtos ao processo">
    <uge-form-demand-product :status="status" @submit="addItem" />
  </ui-page>
</template>
