import { AppError } from '~/error/AppError'

const useDemandPage = (id: string) => {
  const { get } = useDemand()

  const { data, status, error, pending, refresh } = useAsyncData(`demand${id}`, async () => {
    try {
      const [demand] = await Promise.all([get(id)])
      return { demand }
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

  return { demand: computed(() => data.value?.demand), status, error, pending, refresh }
}

export default useDemandPage
