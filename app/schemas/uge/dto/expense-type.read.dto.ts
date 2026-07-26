import { uuidRule } from '~/schemas/rules'

export const ExpenseTypeReadSchema = ExpenseTypeSchema.pick({
  name: true,
  expense_number: true,
})
  .extend({
    id: uuidRule.optional().nullable(),
  })
  .partial()

export const ExpenseTypeReadSummarySchema = ExpenseTypeSchema.omit({
  created_at: true,
  updated_at: true,
})

export type ExpenseTypeRead = z.infer<typeof ExpenseTypeReadSchema>
export type ExpenseTypeReadSummary = z.infer<typeof ExpenseTypeReadSummarySchema>

