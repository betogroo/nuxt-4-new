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
</script>

<template>
  <ui-page :title="`${upperTitle} - Home page`">
    <ui-text-field v-model="tempTitle" label="Teste" name="test" />
    <ui-btn @click="testStore.setTitle(tempTitle)">Alterar</ui-btn>
    <ui-btn color="red" variant="outlined" @click="testStore.$reset">Reset</ui-btn>
    <ui-list v-if="units?.length" :items="units" :status="status">
      <ui-list-item v-for="item in units" :key="item.id">{{ item.name }}</ui-list-item>
    </ui-list>
    <pre>{{ units }}</pre>
    <div>{{ status }}</div>
  </ui-page>
</template>
