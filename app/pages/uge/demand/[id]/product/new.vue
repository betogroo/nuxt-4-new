<script setup lang="ts">
  import { DemandItemFormSchema, DemandItemInsertSchema } from '~/schemas'
  import type { DemandItemForm } from '~/types'

  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const { select: productSelect } = useProduct()
  const { select: packagingTypeSelect } = usePackagingType()
  const { create } = useDemandItem()

  const { values, handleReset, handleSubmit, meta } = useZodForm<DemandItemForm>(
    DemandItemFormSchema,
    {},
  )

  const onSubmit = handleSubmit(async () => {
    try {
      const parsed = DemandItemInsertSchema.parse({
        ...values,
        demand_id: id.value,
        //dispute_date: values.dispute_date ?? null,
        //electronic_process_number: values.electronic_process_number ?? null,
      })
      const newData = await create(parsed)
      console.log(newData)
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
      <ui-select
        item-subtitle="name_bec"
        item-title="name"
        item-value="id"
        :items="packagingTypeSelect.items.value"
        mode="autocomplete"
        name="packaging_type_id"
        :status="packagingTypeSelect.status.value"
        @focus="packagingTypeSelect.onOpen"
      />
      <ui-text-field name="quantity" type="number" />
    </ui-form>
  </ui-page>
</template>
