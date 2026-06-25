import { z } from 'zod'

import { datetimeRule, uuidRule } from '~/schemas/rules'

export const BaseEntitySchema = z.object({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
  active: z.boolean(),
  deleted_at: datetimeRule.nullable(),
})
