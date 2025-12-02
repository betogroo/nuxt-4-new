import type { z, MenuSchema, MenuAreaSchema } from '~/schemas'

export type Menu = z.infer<typeof MenuSchema>
export type MenuArea = z.infer<typeof MenuAreaSchema>
