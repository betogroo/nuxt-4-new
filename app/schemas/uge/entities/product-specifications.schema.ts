import { z } from 'zod'
export const ProductSpecificationSchema = z.record(z.string(), z.string())
