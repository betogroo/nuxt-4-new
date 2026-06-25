import { ExpenseTypeSchema } from '../entities/expense-type.schema'

export const ExpenseTypeReadSchema = ExpenseTypeSchema.pick({
  name: true,
  expense_number: true,
})

export const ExpenseTypeReadSummarySchema = ExpenseTypeSchema.omit({
  created_at: true,
  updated_at: true,
})
