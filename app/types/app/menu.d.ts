import type { MenuSchema, MenuAreaSchema } from '~/schemas/app/menu.schema'

export type Menu = z.infer<typeof MenuSchema>
export type MenuArea = z.infer<typeof MenuAreaSchema>
