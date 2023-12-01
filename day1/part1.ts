import { getInputAsList } from '../utils/filereader'

const findFirstAndLast = (line: string): string => {
  const numbers = line.match(/\d/g)!
  return numbers[0] + numbers.pop()
}

const input = await getInputAsList('./input.txt')
const total = input.reduce(
  (current, line) => parseInt(findFirstAndLast(line)) + current,
  0
)
console.log(total)
