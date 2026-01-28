export const dateBr = (date: string) => {
  const [year, mouth, day] = date.split('-')
  return `${day}/${mouth}/${year}`
}
