const useAuth = () => {
  const signup = async (credentials: string) => {
    console.log('Vai cadastrar: ', credentials)
  }
  const login = async (credentials: string) => {
    console.log('Vai logar: ', credentials)
  }
  return { signup, login }
}

export default useAuth
