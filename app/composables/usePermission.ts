const usePermission = () => {
  const { data } = useCurrentUser()
  const isAdmin = computed(() => data.value?.profile?.role === 'admin')

  return { isAdmin }
}

export default usePermission
