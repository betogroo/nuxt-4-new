import { CredentialsSchema } from '~/schemas'

const useAuth = () => {
  const signup = async (input: unknown) => {
    const credentials = CredentialsSchema.parse(input)

    console.log('Vai cadastrar: ', credentials)
  }
  const login = async (input: unknown) => {
    const credentials = CredentialsSchema.parse(input)
    console.log('Vai logar: ', credentials)
  }
  return { signup, login }
}

export default useAuth
