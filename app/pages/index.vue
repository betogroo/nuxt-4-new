<script setup lang="ts">
  import { ProductRowsSchema } from '~/schemas'
  import type { Product } from '~/types'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'home',
      priority: 'index',
    },
  })

  const testStore = useTestStore()

  const { title, upperTitle } = storeToRefs(testStore)
  const tempTitle = ref(title.value)

  watch(title, (v) => (tempTitle.value = v))

  const supabase = useSupabaseClient()
  const products = ref<Product[] | null>([])
  try {
    const { data } = await supabase.from('products').select('*')
    if (data) products.value = ProductRowsSchema.parse(data)
  } catch (error) {
    console.log(error)
  }
</script>

<template>
  <ui-page :title="`${upperTitle} - Home page`">
    <ui-text-field v-model="tempTitle" label="Teste" name="test" />
    <ui-btn @click="testStore.setTitle(tempTitle)">Alterar</ui-btn>
    <ui-btn color="red" variant="outlined" @click="testStore.$reset">Reset</ui-btn>
    <pre>
      {{ products }}
    </pre>
  </ui-page>
</template>
