const useDateHelper = () => {
  const dateBr = (date: string) => {
    const [year, mouth, day] = date.split('-')
    return `${day}/${mouth}/${year}`
  }
  return { dateBr }
}

export default useDateHelper
