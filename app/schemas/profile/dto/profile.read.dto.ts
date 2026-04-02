import { ProfileSchema } from '../entities/profile.schema'

export const ProfileReadSchema = ProfileSchema.omit({
  created_at: true,
  updated_at: true,
})
