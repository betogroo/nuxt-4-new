import z from 'zod'
import { StatusSchema } from './general'

export const FormPropsSchema = z.object({
  status: StatusSchema.optional(),
  initialValues: z.record(z.string(), z.unknown()).optional(),
})

export type FormProps<T = Record<string, unknown>> = {
  status?: z.infer<typeof StatusSchema>
  initialValues?: Partial<T>
}
