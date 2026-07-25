import type z from 'zod'
import { ProfileSchema } from '../entities/profile.schema'

export const ProfileReadSchema = ProfileSchema.omit({
  created_at: true,
  updated_at: true,
  deleted_at: true,
})

export const ProfileReadSummarySchema = ProfileReadSchema.pick({
  name: true,
})

export type ProfileRead = z.infer<typeof ProfileReadSchema>
export type ProfileReadSummary = z.infer<typeof ProfileReadSummarySchema>

