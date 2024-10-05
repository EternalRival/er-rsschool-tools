import type { Mode } from '../types/mode.type';

const MAX_REVIEWERS_MAP = {
  JSFE: 4,
  NodeJS: 3,
} as const;

function pruneMissingScores(list: string[]): string[] {
  return list.filter((review) => review !== '');
}

function parseCountableScores({ list, maxReviewers }: { list: string[]; maxReviewers: number }): number[] {
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

export function calcScore(mode: Mode, { max, self, scoreList }: { max: number; self: number; scoreList: string[] }) {
  const receivedScores = pruneMissingScores(scoreList);

  const countableScores = parseCountableScores({ list: receivedScores, maxReviewers: MAX_REVIEWERS_MAP[mode] });

  const averageScore = calcAverageScore({ list: countableScores, method: 'round' });

  const isAppealable = checkIsAppealable({ self, averageScore, max });

  return { averageScore, isAppealable };
}
