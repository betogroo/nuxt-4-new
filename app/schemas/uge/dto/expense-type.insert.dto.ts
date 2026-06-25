import { ExpenseTypeSchema } from '../entities/expense-type.schema'

export const ExpenseTypeInsertSchema = ExpenseTypeSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})
