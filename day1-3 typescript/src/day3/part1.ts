import { getInputAsList } from '../utils/filereader'

const findSymbols = (line: string): boolean => {
  const symbols = line.match(/[^\d.]/)
  return symbols !== null && symbols?.length > 0
}

const findNumbers = (line: string): string[] => {
  const numbers = line.match(/\d+/g)
  return numbers ?? []
}

const findSearchArea = (
  number: string,
  line: string,
  previousIndexOf: number
) => {
  const index = line.indexOf(number, previousIndexOf)
  const start = index > 0 ? index - 1 : 0
  const end = index + number.length + 1

  return [start, end]
}

const input = await getInputAsList('./input.txt')
const total = input.reduce((total, line, index) => {
  let previousIndexOf = 0
  let toAdd = 0
  const numbers = findNumbers(line)

  numbers.forEach((number) => {
    const [start, end] = findSearchArea(number, line, previousIndexOf)
    previousIndexOf = end
    const previous = index > 0 ? input[index - 1].slice(start, end) : ''
    const current = input[index].slice(start, end)
    const next =
      index < input.length - 1 ? input[index + 1].slice(start, end) : ''

    if (findSymbols(previous) || findSymbols(current) || findSymbols(next)) {
      toAdd += parseInt(number)
    }
  })
  return total + toAdd
}, 0)

console.log(total)
