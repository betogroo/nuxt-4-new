import type z from 'zod'
import { ExpenseTypeSchema } from '../entities/expense-type.schema'

export const ExpenseTypeInsertSchema = ExpenseTypeSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})

export type ExpenseTypeInsert = z.infer<typeof ExpenseTypeInsertSchema>
