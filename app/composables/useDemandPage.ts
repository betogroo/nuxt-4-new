import { AppError } from '~/error/AppError'

const useDemandPage = async (id: string) => {
  const { get } = useDemand()

  const { data, status, error, pending, refresh } = await useAsyncData(`demand${id}`, () => {
    try {
      return get(id)
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, message: error.message })
      }
      throw createError({
        statusCode: 500,
        message: 'Erro inesperado',
      })
    }
  })

  return { demand: data.value, status, error, pending, refresh }
}

export default useDemandPage
