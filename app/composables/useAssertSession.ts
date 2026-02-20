import { AppError } from '~/error/AppError'

const useAssertSession = async () => {
  const supabase = useSupabaseClient()

  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    throw new AppError('Usuário não autenticado', error)
  }

  return data.session
}

export default useAssertSession
