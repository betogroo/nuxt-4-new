import { DemandItemBaseSchema } from '~/schemas'

export const DemandItemInsertSchema = DemandItemBaseSchema.pick({
  product_id: true,
  demand_id: true,
})

export const DemandItemFormSchema = DemandItemBaseSchema.pick({
  product_id: true,
})
