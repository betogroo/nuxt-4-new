// É necessário importar o módulo para estendê-lo
import { _PageMeta } from '#app'
import type z from 'zod'
import type { PageMetaSchema } from '~/schemas/app/page-meta.schema'

export type AppPageMeta = z.infer<typeof PageMetaSchema>

declare module '#app' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PageMeta extends AppPageMeta {}
}

export {}
