import type { Status } from '~/schemas/ui'

const useAsyncAction = <T>(fn: () => Promise<T>) => {
  const status = ref<Status>('idle')
  const error = ref<Error | null>(null)
  const data = ref<T | null>(null)

  const execute = async () => {
    status.value = 'pending'
    error.value = null

    try {
      data.value = await fn()
      status.value = 'success'
      return data.value
    } catch (err) {
      status.value = 'error'
      error.value = err as Error
      throw err
    }
  }

  return { execute, status, error, data }
}

export default useAsyncAction
