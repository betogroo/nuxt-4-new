const useDemandPage = async (id: string) => {
  const { get } = useDemand()

  const { data, status, error, pending, refresh } = await useAsyncData(`demand${id}`, () => {
    return get(id)
  })

  return { demand: data.value, status, error, pending, refresh }
}

export default useDemandPage
