export const getInputAsList = async (path: string): Promise<string[]> => {
  const text = await Bun.file(path).text()
  const lines = text.split('\n')
  lines.pop()
  return lines
}
