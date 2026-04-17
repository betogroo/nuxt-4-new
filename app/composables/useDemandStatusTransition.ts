import { z } from '~/schemas'
import { DemandStatusTransitionReadSchema } from '~/schemas/uge'
import type { DemandStatusTransitionsRead } from '~/types'

const useDemandStatusTransition = () => {
  console.log('leu aqui')

  const { fetchAll: fetchDemandStatusTransitions } = useTableFetch<DemandStatusTransitionsRead[]>({
    table: 'demand_status_transitions',
    schema: z.array(DemandStatusTransitionReadSchema),
    select: `
    from_status_id,
    action_label,
    to_status:demand_status!demand_status_transitions_to_status_id_fkey (
      id,
      code,
      name,
      color,
      sort_order,
      allow_cancel
    )
  `,
  })

  const getNextStatuses = (statusId: string, transitions: DemandStatusTransitionsRead[] = []) => {
    const data = transitions.filter((item) => item.from_status_id === statusId)
    return data
  }

  return { fetchDemandStatusTransitions, getNextStatuses }
}

export default useDemandStatusTransition
