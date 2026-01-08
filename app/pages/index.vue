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
</script>
!
<template>
  <div>
    <h1>{{ upperTitle }} - Home Page</h1>
    <ui-text-field v-model="tempTitle" label="Teste" name="test" />
    <ui-btn @click="testStore.setTitle(tempTitle)">Alterar</ui-btn>
    <ui-btn color="red" variant="outlined" @click="testStore.$reset">Reset</ui-btn>
  </div>
</template>
