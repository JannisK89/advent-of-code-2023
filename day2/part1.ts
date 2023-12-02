import { getInputAsList } from '../utils/filereader'

const getGameScore = (game: string): number => {
  if (
    Math.max(...(game.match(/\d+(?= red)/g) || []).map(Number)) > 12 ||
    Math.max(...(game.match(/\d+(?= green)/g) || []).map(Number)) > 13 ||
    Math.max(...(game.match(/\d+(?= blue)/g) || []).map(Number)) > 14
  )
    return 0

  return parseInt(game.match(/Game \d+/)![0].slice(4))
}

const input = await getInputAsList('./input.txt')
const total = input.reduce((total, line) => getGameScore(line) + total, 0)
console.log(total)
