const useLazySelect = <T>(key: string, fetcher: () => Promise<T[]>) => {
  const { data, error, status, execute } = useAsyncData(key, fetcher, { immediate: false })

  const onOpen = (isOpen: boolean) => {
    if (!isOpen) return
    if (status.value !== 'idle') return

    execute()
  }
  return {
    items: data,
    status,
    error,
    onOpen,
  }
}

export default useLazySelect
