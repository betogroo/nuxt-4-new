import z from 'zod'
import { uuidRule } from '~/schemas/rules'

export const PackagingTypeReadSchema = z
  .object({
    id: uuidRule.optional().nullable(),
    name: z.string().optional().nullable(),
    name_bec: z.string().optional().nullable(),
  })
  .passthrough()

export type PackagingTypeRead = z.infer<typeof PackagingTypeReadSchema>
