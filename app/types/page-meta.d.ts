// É necessário importar o módulo para estendê-lo
import { _PageMeta } from '#app'
import type { PageMetaSchema, z } from '~/schemas'

export type AppPageMeta = z.infer<typeof PageMetaSchema>

declare module '#app' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PageMeta extends AppPageMeta {}
}

export {}
