type UseLazySelectOptions = {
  immediate?: boolean
}

const useLazySelect = <T>(
  key: string,
  fetcher: () => Promise<T[]>,
  options: UseLazySelectOptions = {},
) => {
  const { data, error, status, execute } = useAsyncData(key, fetcher, {
    immediate: options.immediate ?? false,
  })

  const fetch = () => {
    if (status.value === 'idle') {
      return execute()
    }
    return Promise.resolve(data.value)
  }

  const onOpen = (isOpen: boolean | unknown = true) => {
    if (isOpen === false) return
    fetch()
  }

  return {
    items: data,
    status,
    error,
    onOpen,
    fetch,
    execute,
  }
}

export default useLazySelect
