const useDialog = () => {
  const isOpen = ref(false)
  const openDialog = () => {
    isOpen.value = true
  }
  const closeDialog = () => {
    isOpen.value = false
  }
  return { isOpen, openDialog, closeDialog }
}

export default useDialog
