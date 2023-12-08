import { getInputAsList } from '../utils/filereader'
const _ = require('lodash')

const findGears = (line: string): number[] => {
  const gears: number[] = []
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '*') gears.push(i)
  }
  return gears
}

const findNumbers = (lines: string[], gearIndex: number): number => {
  const gearNumbers: string[] = []
  for (const line of lines) {
    const numbers = [...line.matchAll(/\d+/g)]
    numbers.forEach((number) => {
      if (
        _.inRange(
          gearIndex,
          number.index! - 1,
          number.index! + number[0].length + 1
        )
      )
        gearNumbers.push(number[0])
    })
  }
  if (gearNumbers.length === 2) {
    return parseInt(gearNumbers[0]) * parseInt(gearNumbers[1])
  }
  return 0
}

const input = await getInputAsList('./input.txt')
const total = input.reduce((total, line, index) => {
  let toAdd = 0
  const gears = findGears(line)
  for (const gear of gears) {
    toAdd += findNumbers(
      [input[index - 1] ?? '', input[index], input[index + 1] ?? ''],
      gear
    )
  }
  return total + toAdd
}, 0)
console.log(total)
