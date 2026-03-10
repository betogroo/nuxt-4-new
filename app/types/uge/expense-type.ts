import type { ExpenseTypeSchema, z } from '~/schemas'

export type ExpenseType = z.infer<typeof ExpenseTypeSchema>
