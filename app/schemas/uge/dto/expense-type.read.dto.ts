import z from 'zod'
import { ExpenseTypeSchema } from '../entities/expense-type.schema'

export const ExpenseTypeReadSchema = ExpenseTypeSchema.pick({
  id: true,
  name: true,
  expense_number: true,
}).partial()

export const ExpenseTypeReadSummarySchema = ExpenseTypeSchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
})

export type ExpenseTypeRead = z.infer<typeof ExpenseTypeReadSchema>
export type ExpenseTypeReadSummary = z.infer<typeof ExpenseTypeReadSummarySchema>
