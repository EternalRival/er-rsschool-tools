import type { Mode } from '../types/mode.type';
import type { XCheckFormData } from '../types/xcheck-form-data.type';

const MAX_REVIEWERS_MAP = {
  JSFE: 4,
  NodeJS: 3,
} as const;

function removeEmptyReviews(list: string[]): string[] {
  return list.filter((review) => review !== '');
}

function parseValuableScoreList({ list, maxReviewers }: { list: string[]; maxReviewers: number }): number[] {
  return list
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, maxReviewers - 1);
}

function calcArraySum(list: number[]) {
  return list.reduce((sum, number) => sum + number, 0);
}

function calcAverageScore({ list, method }: { list: number[]; method: 'ceil' | 'floor' | 'round' }) {
  return Math[method](calcArraySum(list) / list.length) || 0;
}

function checkIsAppealable({ self, averageScore, max }: { self: number; averageScore: number; max: number }) {
  return self - averageScore >= max * 0.1;
}

export function calcScore(mode: Mode, { max, self, reviewer1, reviewer2, reviewer3, reviewer4 }: XCheckFormData) {
  const scoreList = removeEmptyReviews([reviewer1, reviewer2, reviewer3, reviewer4]);

  const valuableScoreList = parseValuableScoreList({ list: scoreList, maxReviewers: MAX_REVIEWERS_MAP[mode] });

  const averageScore = calcAverageScore({ list: valuableScoreList, method: 'round' });

  const isAppealable = checkIsAppealable({ self, averageScore, max });

  return { averageScore, isAppealable };
}
