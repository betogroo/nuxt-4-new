export const REQUIRED_FIELD = 'Campo Obrigatório' as const
export const REQUIRED_SELECT_FIELD = 'Selecione uma opção' as const

export const INVALID_DATE = 'Data Inválida' as const
export const INVALID_PAST_DATE = 'A data informada não pode ser passada' as const

export const MIN_LENGTH = (n: number) =>
  n < 2 ? REQUIRED_FIELD : (`O campo deve conter pelo menos ${n} caracteres` as const)

export const LOADING = 'Carregando...' as const
