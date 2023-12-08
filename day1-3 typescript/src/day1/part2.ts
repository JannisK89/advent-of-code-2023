import { getInputAsList } from '../utils/filereader'

const numbersMap = new Map<string, string>([
  ['ne', '1'],
  ['wo', '2'],
  ['hree', '3'],
  ['our', '4'],
  ['ive', '5'],
  ['ix', '6'],
  ['even', '7'],
  ['ight', '8'],
  ['ine', '9'],
])

const findFirstAndLast = (line: string): string => {
  const numbers = line.match(/\d|ne|wo|hree|our|ive|ix|even|ight|ine/g)!
  const firstNumber =
    numbers[0].length > 1 ? numbersMap.get(numbers[0]) : numbers[0]

  const secondNumber =
    numbers[numbers.length - 1].length > 1
      ? numbersMap.get(numbers.pop()!)!
      : numbers.pop()!

  return firstNumber + secondNumber
}

const input = await getInputAsList('./input.txt')
const total = input.reduce(
  (current, line) => parseInt(findFirstAndLast(line)) + current,
  0
)
console.log(total)
