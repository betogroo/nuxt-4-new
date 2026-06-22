<script setup lang="ts">
  import { DemandItemFormSchema } from '~/schemas/uge/forms/demand-item.form.schema'
  import type { DemandItemForm } from '~/types/uge/demand'
  import type { PackagingTypeRead } from '~/types/uge/packaging-type'
  import type { FormProps } from '~/types/ui/form'

  defineProps<FormProps>()
  const $emit = defineEmits<{
    submit: [DemandItemForm]
  }>()

  const { select: productSelect } = useProduct()
  const { fetchByProductId } = usePackagingType()
  const { values, handleReset, handleSubmit, meta, setFieldValue } = useZodForm<DemandItemForm>(
    DemandItemFormSchema,
    {},
  )
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

  const onSubmit = handleSubmit(() => {
    $emit('submit', { ...values })
  })
</script>

<template>
  <ui-form :is-valid="!meta.valid" :status="status" @reset="handleReset" @submit="onSubmit">
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
</template>
