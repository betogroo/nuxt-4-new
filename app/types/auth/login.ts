import type { z, LoginSchema, SignupSchema } from '~/schemas'

export type Login = z.infer<typeof LoginSchema>
export type Signup = z.infer<typeof SignupSchema>
