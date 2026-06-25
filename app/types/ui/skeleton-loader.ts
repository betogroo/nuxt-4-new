import type z from 'zod'
import type { SkeletonLoaderTypeSchema } from '~/schemas/ui'

export type SkeletonLoaderType = z.infer<typeof SkeletonLoaderTypeSchema>
