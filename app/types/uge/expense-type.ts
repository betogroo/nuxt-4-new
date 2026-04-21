import type z from 'zod'
import type { ExpenseTypeReadSummarySchema } from '~/schemas/uge/dto/expense-type.read.dto'
import type { ExpenseTypeSchema } from '~/schemas/uge/entities/expense-type.schema'

export type ExpenseType = z.infer<typeof ExpenseTypeSchema>
export type ExpenseTypeReadSummary = z.infer<typeof ExpenseTypeReadSummarySchema>
