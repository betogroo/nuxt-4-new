import type z from 'zod'
import type { ProfileReadSchema } from '~/schemas/profile/dto/profile.read.dto'
import type { ProfileSchema } from '~/schemas/profile/entities/profile.schema'

export type Profile = z.infer<typeof ProfileSchema>
export type ProfileRead = z.infer<typeof ProfileReadSchema>
