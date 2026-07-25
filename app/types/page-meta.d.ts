// É necessário importar o módulo para estendê-lo
import { _PageMeta } from '#app'
import type { AppPageMeta } from '~/schemas/app/page-meta.schema'

export type { AppPageMeta }

declare module '#app' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PageMeta extends AppPageMeta {}
}

export {}

