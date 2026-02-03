import type { BreadcrumbItem } from '~/types'

const useBreadcrumbs = (dynamicTitle?: MaybeRef<string>) => {
  const route = useRoute()
  const breadcrumb = computed<BreadcrumbItem[]>(() => {
    const base = (route.meta.breadcrumb as BreadcrumbItem[]) || []
    const title = typeof dynamicTitle === 'string' ? dynamicTitle : dynamicTitle?.value
    if (!title) return base

    return [...base, { title: title || 'Detalhes', href: route.fullPath, disabled: true }]
  })
  return { breadcrumb }
}

export default useBreadcrumbs
