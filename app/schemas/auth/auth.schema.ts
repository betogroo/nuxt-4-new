import { z } from '~/schemas'

export const CredentialsSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export const SignupFormSchema = z
  .object({
    passwordConfirm: z.string().min(6, 'A confirmação deve ter no mínimo 6 dígitos'),
  })
  .merge(CredentialsSchema)
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas devem ser idênticas',
    path: ['passwordConfirm'],
  })
