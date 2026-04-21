// ~/utils/handleAsyncError.ts
import { AppError } from '~/error/AppError'

export function handleAsyncError(error: unknown): never {
  if (error instanceof AppError) {
    throw createError({
      statusCode: 400,
      message: error.message,
    })
  }

  throw createError({
    statusCode: 500,
    message: 'Erro inesperado',
  })
}
