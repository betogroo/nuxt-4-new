import { z } from '~/schemas'

export const LoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export const SignupSchema = z
  .object({
    passwordConfirm: z.string().min(6, 'A confirmação deve ter no mínimo 6 dígitos'),
  })
  .merge(LoginSchema)
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas devem ser idênticas',
    path: ['passwordConfirm'],
  })
