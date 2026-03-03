export const dateBr = (value: string | null) => {
  if (!value) return 'Data não cadastrada'

  const date = new Date(value)

  if (isNaN(date.getTime())) return 'Data inválida'

  return date.toLocaleDateString('pt-BR')
}
