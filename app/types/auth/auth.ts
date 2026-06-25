import type z from 'zod'
import type {
  AuthActionSchema,
  CredentialsSchema,
  SignupFormSchema,
} from '~/schemas/auth/auth.schema'

export type AuthAction = z.infer<typeof AuthActionSchema>
export type Login = z.infer<typeof CredentialsSchema>
export type Signup = z.infer<typeof CredentialsSchema>
export type SignupForm = z.infer<typeof SignupFormSchema>
