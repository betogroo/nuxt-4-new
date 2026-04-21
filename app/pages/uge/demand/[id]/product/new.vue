<script setup lang="ts">
  import { DemandItemInsertSchema } from '~/schemas/uge/dto/demand-item.insert.dto'
  import { DemandItemFormSchema } from '~/schemas/uge/forms/demand-item.form.schema'
  import type { DemandItemForm, PackagingTypeRead } from '~/types'

  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const { select: productSelect } = useProduct()
  const { fetchByProductId } = usePackagingType()
  const { create } = useDemandItem()

  const { values, handleReset, handleSubmit, meta, setFieldValue } = useZodForm<DemandItemForm>(
    DemandItemFormSchema,
    {},
  )

  const { execute, status } = useAsyncAction(async () => {
    const parsed = DemandItemInsertSchema.parse({
      ...values,
      demand_id: id.value,
      //dispute_date: values.dispute_date ?? null,
      //electronic_process_number: values.electronic_process_number ?? null,
    })
    return await create(parsed)
  })

  const onSubmit = handleSubmit(async () => {
    try {
      await execute()
    } catch (error) {
      handleAsyncError(error)
    }
  })

  const onReset = () => {
    handleReset()
  }

  const packagingTypeSelect = ref<PackagingTypeRead[]>([])

  const updatePackagingTypeSelect = async (productId: string) => {
    console.log('productId:', productId)

    if (!productId) {
      packagingTypeSelect.value = []
      return
    }
    setFieldValue('packaging_type_id', '')
    const data = await fetchByProductId({ column: 'product_id', value: productId })
    packagingTypeSelect.value = data.map((i) => i.packaging_types)
  }
</script>

<template>
  <ui-page show-back title="Adicionar produtos ao processo">
    <ui-form :is-valid="!meta.valid" :status="status" @reset="onReset" @submit="onSubmit">
      <ui-select
        item-subtitle="description"
        item-title="name"
        item-value="id"
        :items="productSelect.items.value"
        mode="autocomplete"
        name="product_id"
        :status="productSelect.status.value"
        @change="updatePackagingTypeSelect"
        @focus="productSelect.onOpen"
      />
      <ui-select
        item-subtitle="name_bec"
        item-title="name"
        item-value="id"
        :items="packagingTypeSelect"
        mode="autocomplete"
        name="packaging_type_id"
      />
      <ui-text-field name="quantity" type="number" />
    </ui-form>

    <pre>{{ values }}</pre>
  </ui-page>
</template>
