export const dateBr = (value: string) => {
  const [datePart = ''] = value.split('T')
  const [year, mouth, day] = datePart.split('-')
  return `${day}/${mouth}/${year}`
}
