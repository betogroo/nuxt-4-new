import { z } from '~/schemas'

export const HeadingLevelSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
])

export const HeadingWeightSchema = z.union([
  z.literal('regular'),
  z.literal('medium'),
  z.literal('bold'),
])
export const HeadingAlignSchema = z.union([
  z.literal('left'),
  z.literal('center'),
  z.literal('right'),
])
