import { z } from '~/schemas'
import { datetimeRule, nameRule, positiveNumber, uuidRule } from '~/schemas/rules'

export const ExpenseTypeBaseSchema = z.object({
  expense_number: positiveNumber,
  name: nameRule,
})

export const ExpenseTypeSchema = ExpenseTypeBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})

export const ExpenseTypeRowsSchema = z.array(ExpenseTypeSchema)
