// utils/format.ts
export const format = {
  demandNumber(number: number, year: number, digits = 4) {
    return `${number.toString().padStart(digits, '0')}/${year}`
  },
}
