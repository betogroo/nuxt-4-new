import type { z } from 'zod'
import type { SpecificationKeyReadSchema } from '~/schemas/uge/dto/specification-key.read.dto'
import type { SpecificationKeySchema } from '~/schemas/uge/entities/specification-key.schema'

export type SpecificationKey = z.infer<typeof SpecificationKeySchema>
export type SpecificationKeyRead = z.infer<typeof SpecificationKeyReadSchema>
