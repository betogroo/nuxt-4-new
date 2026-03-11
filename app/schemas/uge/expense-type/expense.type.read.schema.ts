import { ExpenseTypeSchema } from '~/schemas'

export const ExpenseTypeReadSchema = ExpenseTypeSchema.omit({
  created_at: true,
  updated_at: true,
})
