import { getInputAsList } from '../utils/filereader'

const getGameScore = (game: string): number => {
  const red = Math.max(...game.match(/\d+(?= red)/g)!.map(Number))
  const green = Math.max(...game.match(/\d+(?= green)/g)!.map(Number))
  const blue = Math.max(...game.match(/\d+(?= blue)/g)!.map(Number))
  return red * green * blue
}

const input = await getInputAsList('./input.txt')
const total = input.reduce((total, line) => getGameScore(line) + total, 0)
console.log(total)
