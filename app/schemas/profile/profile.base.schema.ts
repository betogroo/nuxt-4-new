import { z } from '~/schemas'
import { datetimeRule, nameRule, uuidRule } from '~/schemas/rules'

export const RoleSchema = z.enum(['user', 'admin'])

const ProfileBaseSchema = z.object({
  avatar_url: z.string().nullable(),
  name: nameRule.nullable(),
  role: z.string(),
})

export const ProfileSchema = ProfileBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
})
