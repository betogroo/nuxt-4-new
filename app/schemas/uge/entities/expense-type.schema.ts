import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const ExpenseTypeSchema = BaseEntitySchema.extend({
  name: nameRule,
  expense_number: positiveNumber,
})
