import type { RouteLocationRaw } from '~/types'
const useGuestRedirect = (options?: { fallback?: RouteLocationRaw }) => {
  const user = useSupabaseUser()
  const redirectInfo = useSupabaseCookieRedirect()
  const route = useRoute()
  watch(
    user,
    () => {
      if (!user.value) return
      const path = redirectInfo.pluck() || options?.fallback || '/'
      if (route.path !== path) {
        navigateTo(path)
      }
    },
    { immediate: true },
  )
  return { user }
}

export default useGuestRedirect
