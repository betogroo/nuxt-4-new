<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Produto',
      hidden: true,
    },
  })

  const { params } = useRoute()
  const id = computed(() => params.id as string)
  const { get } = useProduct()
  const { data: product } = useAsyncData(`product-${id.value}`, () => get(id.value))
  const formatted = computed(() => JSON.stringify(product.value, null, 2))
</script>

<template>
  <ui-page :title="product?.name">
    <pre>{{ formatted }}</pre>
  </ui-page>
</template>
