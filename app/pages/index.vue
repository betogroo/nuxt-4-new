<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'mdi-home',
      priority: 'index',
    },
  })

  const testStore = useTestStore()
  const { title, upperTitle } = storeToRefs(testStore)
  const tempTitle = ref(title.value)

  watch(title, (v) => (tempTitle.value = v))
</script>
!
<template>
  <div>
    <h1>{{ upperTitle }} - Home Page</h1>
    <ui-form-text-field v-model="tempTitle" label="Teste" name="test" />
    <ui-form-btn-action @click="testStore.setTitle(tempTitle)">Alterar</ui-form-btn-action>
    <ui-form-btn-action @click="testStore.$reset">Reset</ui-form-btn-action>
  </div>
</template>
