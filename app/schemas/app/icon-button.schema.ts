import { z } from '~/schemas'

export const IconButtonSchema = z.object({
  name: z.string().optional(),
  to: z.string(),
  icon: z.string(),
})

export const IconButtonSchemaList = z.array(IconButtonSchema)
