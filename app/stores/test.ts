export const useTestStore = defineStore('test', () => {
  const title = ref<string>('Nuxt 4')
  const $reset = () => (title.value = 'Nuxt 4')

  const upperTitle = computed(() => title.value.toUpperCase())
  const setTitle = (newValue: string) => {
    title.value = newValue
  }
  return { title, upperTitle, $reset, setTitle }
})
