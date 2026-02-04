import { CredentialsSchema } from '~/schemas'
import type { AuthAction } from '~/types'
import { AppError } from '~/error/AppError'

const useAuth = () => {
  const supabase = useSupabaseClient()
  const authenticate = async (action: AuthAction, input: unknown) => {
    const result = CredentialsSchema.safeParse(input)

    if (!result.success) {
      throw new AppError('Credenciais inválidas; Verifique os dados informados', result.error)
    }
    const credentials = result.data

    const response =
      action === 'signup'
        ? await supabase.auth.signUp(credentials)
        : await supabase.auth.signInWithPassword(credentials)

    if (response.error) {
      throw new AppError(response.error.message, response.error)
    }
  }

  return { authenticate }
}

export default useAuth
