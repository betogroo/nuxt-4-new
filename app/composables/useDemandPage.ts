import { AppError } from '~/error/AppError'

const useDemandPage = (id: string) => {
  const { get } = useDemand()
  const { fetchDemandItemsByDemands } = useDemandItem()

  const { data, status, error, pending, refresh } = useAsyncData(`demand${id}`, async () => {
    try {
      const [demand, items] = await Promise.all([
        get(id),
        fetchDemandItemsByDemands({ column: 'demand_id', value: id }),
      ])
      return { demand, items }
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, message: error.message })
      }
      throw createError({
        statusCode: 500,
        message: 'Erro inesperado',
      })
    }
  })

  return {
    demand: computed(() => data.value?.demand),
    items: computed(() => data.value?.items ?? []),
    status,
    error,
    pending,
    refresh,
  }
}

export default useDemandPage
