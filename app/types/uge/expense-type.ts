import type { z } from '~/schemas'
import type { ExpenseTypeSchema } from '~/schemas/uge/entities/expense-type.schema'

export type ExpenseType = z.infer<typeof ExpenseTypeSchema>
