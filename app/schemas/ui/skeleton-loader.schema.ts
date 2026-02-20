import { z } from '~/schemas'

export const SkeletonLoaderTypeSchema = z.enum(['image', 'card', 'list-item', 'list-item-two-line'])
