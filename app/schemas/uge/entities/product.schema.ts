import { z } from 'zod'
import { nameRule, positiveNumber, datetimeRule, uuidRule } from '~/schemas/rules'

export const SpecificationsSchema = z.record(z.string(), z.string())

export const ProductSchema = z
  .object({
    id: uuidRule,

    product_class_id: uuidRule,
    expense_type_id: uuidRule,

    name: nameRule,
    description: z.string(),
    cat_mat: positiveNumber,
    cat_bec: positiveNumber,

    nat_gov: positiveNumber.nullable(),
    pdm: positiveNumber.nullable(),
    specifications: SpecificationsSchema.nullable(),

    active: z.boolean(),

    created_at: datetimeRule,
    updated_at: datetimeRule,
  })
  .strict()
