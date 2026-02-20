import type { SkeletonLoaderTypeSchema, z } from '~/schemas'

export type SkeletonLoaderType = z.infer<typeof SkeletonLoaderTypeSchema>
