import type { z, CredentialsSchema, SignupFormSchema } from '~/schemas'

export type Login = z.infer<typeof CredentialsSchema>
export type Signup = z.infer<typeof CredentialsSchema>
export type SignupForm = z.infer<typeof SignupFormSchema>
