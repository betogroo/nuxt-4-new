import z from 'zod'
import { DemandStatusTransitionReadSchema } from '~/schemas/uge/dto/demand-status-transition.read.dto'

import type { DemandStatusTransitionsRead } from '~/types'

const useDemandStatusTransition = () => {
  console.log('leu aqui')

  const { fetchAll: fetchDemandStatusTransitions } = useTableFetch<DemandStatusTransitionsRead[]>({
    table: 'demand_status_transitions_active',
    schema: z.array(DemandStatusTransitionReadSchema),
  })

  const getNextStatuses = (statusId: string, transitions: DemandStatusTransitionsRead[] = []) => {
    const data = transitions.filter((item) => item.from_status_id === statusId)
    return data
  }

  return { fetchDemandStatusTransitions, getNextStatuses }
}

export default useDemandStatusTransition
