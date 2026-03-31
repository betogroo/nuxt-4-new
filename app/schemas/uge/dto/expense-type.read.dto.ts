import { ExpenseTypeSchema } from '../entities/expense-type.schema'

export const ExpenseTypeReadSchema = ExpenseTypeSchema.omit({
  created_at: true,
  updated_at: true,
})
