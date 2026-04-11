export const dateBr = (value: string | null) => {
  if (!value) return 'Data não cadastrada'

  let date = new Date(value)

  // Se falhar e for formato date puro, tenta forçar meia-noite
  if (isNaN(date.getTime()) && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    date = new Date(`${value}T00:00:00`)
  }

  if (isNaN(date.getTime())) return 'Data inválida'

  return date.toLocaleDateString('pt-BR')
}
