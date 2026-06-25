import z from 'zod'
import { StatusSchema } from './general'

export const FormPropsSchema = z.object({ status: StatusSchema.optional() })
