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

  const { select: packagingTypeSelect } = usePackagingType()
  const { select: objectTypeSelect } = useObjectType()
  const { select: productClassSelect } = useProductClass()
  const { select: expenseTypeSelect } = useExpenseType()
</script>

<template>
  <ui-page :title="`${upperTitle} - Home page`">
    <ui-text-field v-model="tempTitle" label="Teste" name="test" />
    <ui-btn @click="testStore.setTitle(tempTitle)">Alterar</ui-btn>
    <ui-btn color="red" variant="outlined" @click="testStore.$reset">Reset</ui-btn>
    <ui-select
      item-subtitle="name_bec"
      item-title="name"
      :items="packagingTypeSelect.items.value || []"
      mode="autocomplete"
      name="units"
      placeholder="Unidade"
      :status="packagingTypeSelect.status.value"
      @focus="packagingTypeSelect.onOpen"
    />
    <ui-select
      item-subtitle="ptres"
      item-title="name"
      :items="objectTypeSelect.items.value || []"
      name="objectTypes"
      placeholder="PTRES"
      :status="objectTypeSelect.status.value"
      @focus="objectTypeSelect.onOpen"
    />
    <ui-select
      item-subtitle="code"
      item-title="name"
      item-value="code"
      :items="productClassSelect.items.value || []"
      mode="autocomplete"
      name="productClass"
      :status="productClassSelect.status.value"
      @focus="productClassSelect.onOpen"
    />
    <ui-select
      item-subtitle="name"
      item-title="expense_number"
      item-value="id"
      :items="expenseTypeSelect.items.value || []"
      mode="autocomplete"
      name="expenseTypes"
      :status="expenseTypeSelect.status.value"
      @focus="expenseTypeSelect.onOpen"
    />
  </ui-page>
</template>
