import type { z } from 'zod'
import type { SpecificationKeyReadSchema } from '~/schemas/uge/dto/specification-key.read.dto'
import type { SpecificationValueReadSchema } from '~/schemas/uge/dto/specification-value.read.dto'
import type { SpecificationKeySchema } from '~/schemas/uge/entities/specification-key.schema'
import type { SpecificationValueSchema } from '~/schemas/uge/entities/specification-value.schema'

export type SpecificationKey = z.infer<typeof SpecificationKeySchema>
export type SpecificationKeyRead = z.infer<typeof SpecificationKeyReadSchema>

export type SpecificationValue = z.infer<typeof SpecificationValueSchema>
export type SpecificationValueRead = z.infer<typeof SpecificationValueReadSchema>
