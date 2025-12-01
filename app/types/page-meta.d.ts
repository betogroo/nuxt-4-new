// É necessário importar o módulo para estendê-lo
import { _PageMeta } from '#app'

declare module '#app' {
  interface PageMeta {
    title: string
    showInNavBar?: boolean
    requiresAuth?: boolean
    order?: number
  }
}

export {}
