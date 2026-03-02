// composables/useCurrentUser.ts

export const useCurrentUser = () => {
  return useAsyncData(
    'current-user',
    async () => {
      const supabase = useSupabaseClient()

      // 🔥 fonte oficial do usuário (não JWT)
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError) throw authError
      if (!user) return null

      // 🔥 busca profile ligado ao auth.users.id
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle()

      if (profileError) throw profileError

      return {
        user,
        profile,
      }
    },
    {
      server: true, // SSR
      lazy: false, // já carrega antes do render
    },
  )
}
