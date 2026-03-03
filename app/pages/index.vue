<script setup lang="ts">
  import type { Profile } from '~/types'

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
  const profiles = ref<Profile[] | null>([])
  try {
    const { data } = await supabase.from('profiles').select('*')
    if (data) profiles.value = data
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
      {{ profiles }}
    </pre>
  </ui-page>
</template>
