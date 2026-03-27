import { DemandItemBaseSchema } from '~/schemas'

export const DemandItemFormSchema = DemandItemBaseSchema.pick({
  product_id: true,
})
