export const dateBr = (value: string | null) => {
  if (!value) return 'Data não cadastrada'

  const date = new Date(value + 'T00:00:00')

  if (isNaN(date.getTime())) return 'Data inválida'

  return date.toLocaleDateString('pt-BR')
}
