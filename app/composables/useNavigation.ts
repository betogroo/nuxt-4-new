import { PageMetaSchema } from '~/schemas'

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

  return { allRoutes }
}

export default useNavigation
