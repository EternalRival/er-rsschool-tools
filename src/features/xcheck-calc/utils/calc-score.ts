import type { Mode } from '../types/mode.type';
import type { XCheckFormData } from '../types/xcheck-form-data.type';

export function calcScore(mode: Mode, { max, self, reviewer1, reviewer2, reviewer3, reviewer4 }: XCheckFormData) {
  const scoreList = [reviewer1, reviewer2, reviewer3];

  if (mode === 'JSFE') {
    scoreList.push(reviewer4);
  }

  const sortedList = scoreList
    .filter((s) => s !== '')
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, scoreList.length - 1);

  const listSum = sortedList.reduce((sum, number) => sum + number, 0);
  const averageScore = Math.round(listSum / sortedList.length) || 0;

  const isAppealable = self - averageScore >= max * 0.1;

  return { averageScore, isAppealable };
}
