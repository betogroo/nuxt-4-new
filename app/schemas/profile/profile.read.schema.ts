import { ProfileSchema } from '~/schemas'

export const ProfileReadSchema = ProfileSchema.omit({
  created_at: true,
  updated_at: true,
})
