export const REQUIRED_FIELD = 'Campo Obrigatório' as const
export const REQUIRED_SELECT_FIELD = 'Selecione uma opção' as const

export const INVALID_DATE = 'Data Inválida' as const
export const INVALID_PAST_DATE = 'A data informada não pode ser passada' as const

export const MIN_LENGTH = (value: number) =>
  value < 2
    ? 'O campo não pode ser em branco'
    : (`O campo deve conter pelo menos ${value} caracteres` as const)
