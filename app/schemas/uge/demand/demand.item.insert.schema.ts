import { DemandItemBaseSchema } from '~/schemas'

export const DemandItemInsertSchema = DemandItemBaseSchema.pick({
  product_id: true,
  demand_id: true,
  packaging_type_id: true,
  quantity: true,
})

export const DemandItemFormSchema = DemandItemBaseSchema.pick({
  product_id: true,
  packaging_type_id: true,
  quantity: true,
})
