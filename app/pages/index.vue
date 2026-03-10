<script setup lang="ts">
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

  const { data: units, status } = useAsyncData('unity', async () => {
    const { data } = await supabase.from('unity').select('*')
    return data
  })
  const { data: objectTypes, status: statusObjectTypes } = useAsyncData(
    'object_types',
    async () => {
      const { data } = await supabase.from('object_types').select('*')
      return data
    },
  )
  const { data: productClass, status: productClassStatus } = useAsyncData(
    'product_class',
    async () => {
      const { data } = await supabase.from('product_class').select('*')
      return data
    },
  )
  const { data: expenseTypes, status: expenseTypesStatus } = useAsyncData(
    'expense_types',
    async () => {
      const { data } = await supabase.from('expense_types').select('*')
      return data
    },
  )
</script>

<template>
  <ui-page :title="`${upperTitle} - Home page`">
    <ui-text-field v-model="tempTitle" label="Teste" name="test" />
    <ui-btn @click="testStore.setTitle(tempTitle)">Alterar</ui-btn>
    <ui-btn color="red" variant="outlined" @click="testStore.$reset">Reset</ui-btn>
    <ui-select item-subtitle="name_bec" item-title="name" :items="units || []" name="units" />
    <ui-select
      item-subtitle="ptres"
      item-title="name"
      :items="objectTypes || []"
      name="objectTypes"
    />
    <ui-select
      item-subtitle="code"
      item-title="name"
      item-value="code"
      :items="productClass || []"
      name="productClass"
    />
    <ui-select
      item-subtitle="expense_number"
      item-title="name"
      item-value="id"
      :items="expenseTypes || []"
      name="expenseTypes"
    />
    <div>{{ status }}</div>
    <div>{{ productClassStatus }}</div>
    <div>{{ statusObjectTypes }}</div>
    <div>{{ expenseTypesStatus }}</div>
  </ui-page>
</template>
