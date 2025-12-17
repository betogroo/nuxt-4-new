import { z } from '~/schemas'

export const LoginSchema = z.object({
  email: z.email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})
