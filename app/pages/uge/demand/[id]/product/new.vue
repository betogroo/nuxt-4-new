<script setup lang="ts">
  import { DemandItemFormSchema, DemandItemInsertSchema } from '~/schemas'
  import type { DemandItemForm } from '~/types'

  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const { select: productSelect } = useProduct()

  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandItemForm>(
    DemandItemFormSchema,
    {},
  )

  const onSubmit = handleSubmit(async () => {
    try {
      const parsed = DemandItemInsertSchema.parse({
        ...values,
        demand_id: id.value,
      })
      console.log(parsed)
    } catch (error) {
      const err = error as Error
      console.log(err)
    }
  })

  const onReset = () => {
    handleReset()
  }
</script>

<template>
  <ui-page show-back title="Adicionar produtos ao processo">
    <ui-form :is-valid="!meta.valid" @reset="onReset" @submit="onSubmit">
      <ui-select
        item-subtitle="specifications"
        item-title="description"
        item-value="id"
        :items="productSelect.items.value"
        mode="autocomplete"
        name="product_id"
        :status="productSelect.status.value"
        @focus="productSelect.onOpen"
      />
    </ui-form>
  </ui-page>
</template>
