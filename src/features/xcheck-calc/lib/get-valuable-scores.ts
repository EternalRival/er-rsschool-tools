export function getValuableScores(list: (string | undefined)[]): number[] {
  return list
    .filter((s) => s !== '')
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, list.length - 1);
}
