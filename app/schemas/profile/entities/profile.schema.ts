import { z } from 'zod'
import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule } from '~/schemas/rules'

export const ProfileSchema = BaseEntitySchema.extend({
  avatar_url: z.string().nullable(),
  name: nameRule.nullable(),
  role: z.string(),
}).strict()
