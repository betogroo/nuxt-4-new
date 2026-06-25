import { handleAsyncError } from '~/utils/handleError'

const useDemandPage = (id: string) => {
  const { get } = useDemand()
  const { fetchDemandItemsByDemands } = useDemandItem()
  const { fetchDemandStatusTransitions, getNextStatuses } = useDemandStatusTransition()

  const { data, status, error, pending, refresh } = useAsyncData(`demand${id}`, async () => {
    const [demand, items, transitions] = await Promise.all([
      get(id),
      fetchDemandItemsByDemands({ column: 'demand_id', value: id }),
      fetchDemandStatusTransitions(),
    ])

    const itemsWithNext = items.map((item) => ({
      ...item,
      nextStatuses: getNextStatuses(item.status.id, transitions),
    }))

    return { demand, items: itemsWithNext, transitions }
  })
  if (error.value) handleAsyncError(error.value)

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
