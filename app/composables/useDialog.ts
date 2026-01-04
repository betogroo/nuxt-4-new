const useDialog = () => {
  const isOpen = ref(false)
  const openDialog = () => {
    isOpen.value = true
  }
  return { isOpen, openDialog }
}

export default useDialog
