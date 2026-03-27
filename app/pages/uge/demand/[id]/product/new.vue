<script setup lang="ts">
  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const { select: productSelect } = useProduct()
  const create = () => {
    console.log(id.value)
  }
</script>

<template>
  <ui-page show-back title="Adicionar produtos ao processo">
    <ui-form @submit="create">
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
