import { PageMetaSchema } from '~/schemas'
import type { MenuArea } from '~/types'

const useNavigation = () => {
  const router = useRouter()

  const allRoutes = computed(() => {
    return router
      .getRoutes()
      .filter((route) => route.meta.menu && route.meta.menu.title)
      .map((route) => {
        const parsed = PageMetaSchema.safeParse(route.meta)

        if (!parsed.success) return null

        return {
          name: route.name,
          path: route.path,
          ...parsed.data,
        }
      })
  })

  const getMenuByArea = (area: MenuArea) => {
    return allRoutes.value
      .filter((route) => route?.menu?.areas.includes(area) && !route.menu.hidden)
      .sort((a, b) => {
        const orderA = a?.menu?.order ?? 999
        const orderB = b?.menu?.order ?? 999
        return orderA - orderB
      })
  }

  return { allRoutes, getMenuByArea }
}

export default useNavigation
