// middleware/guest.ts
export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  if (!user.value) return

  const redirectTo = (to.query.redirectTo as string) || '/contact'

  return navigateTo(redirectTo)
})
