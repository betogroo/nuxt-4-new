import type { z, LoginSchema } from '~/schemas'

export type Login = z.infer<typeof LoginSchema>
