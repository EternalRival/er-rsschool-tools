export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0);
}
