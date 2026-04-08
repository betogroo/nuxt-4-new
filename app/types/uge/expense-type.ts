import type { z } from '~/schemas'
import type { ExpenseTypeSchema } from '~/schemas/uge/entities'
import type { ExpenseTypeReadSummarySchema } from '~/schemas/uge/dto'

export type ExpenseType = z.infer<typeof ExpenseTypeSchema>
export type ExpenseTypeReadSummary = z.infer<typeof ExpenseTypeReadSummarySchema>
