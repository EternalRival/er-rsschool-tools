import { calcScore } from './calc-score';

describe('calcScore', () => {
  describe('0 reviewers', () => {
    it.each([
      ['JSFE', [100, 100, '', '', '', ''], [0, true]],
      ['NodeJS', [100, 100, '', '', '', ''], [0, true]],
    ] as const)(
      '(%s):\t%j\t=>\t%j',
      (mode, [max, self, reviewer1, reviewer2, reviewer3, reviewer4], [averageScore, isAppealable]) => {
        const formData = { max, self, reviewer1, reviewer2, reviewer3, reviewer4 };
        const expected = { averageScore, isAppealable };

        expect(calcScore(mode, formData)).toEqual(expected);
      }
    );
  });

  describe('1 reviewer', () => {
    it.each([
      ['JSFE', [100, 100, '0', '', '', ''], [0, true]],
      ['JSFE', [100, 100, '50', '', '', ''], [50, true]],
      ['JSFE', [100, 100, '100', '', '', ''], [100, false]],
      ['NodeJS', [100, 100, '0', '', '', ''], [0, true]],
      ['NodeJS', [100, 100, '50', '', '', ''], [50, true]],
      ['NodeJS', [100, 100, '100', '', '', ''], [100, false]],
    ] as const)(
      '(%s):\t%j\t=>\t%j',
      (mode, [max, self, reviewer1, reviewer2, reviewer3, reviewer4], [averageScore, isAppealable]) => {
        const formData = { max, self, reviewer1, reviewer2, reviewer3, reviewer4 };
        const expected = { averageScore, isAppealable };

        expect(calcScore(mode, formData)).toEqual(expected);
      }
    );
  });

  describe('2 reviewers', () => {
    it.each([
      ['JSFE', [100, 100, '0', '0', '', ''], [0, true]],
      ['JSFE', [100, 100, '0', '50', '', ''], [25, true]],
      ['JSFE', [100, 100, '0', '100', '', ''], [50, true]],
      ['JSFE', [100, 100, '50', '0', '', ''], [25, true]],
      ['JSFE', [100, 100, '50', '50', '', ''], [50, true]],
      ['JSFE', [100, 100, '50', '100', '', ''], [75, true]],
      ['JSFE', [100, 100, '100', '0', '', ''], [50, true]],
      ['JSFE', [100, 100, '100', '50', '', ''], [75, true]],
      ['JSFE', [100, 100, '100', '100', '', ''], [100, false]],

      ['NodeJS', [100, 100, '0', '0', '', ''], [0, true]],
      ['NodeJS', [100, 100, '0', '50', '', ''], [25, true]],
      ['NodeJS', [100, 100, '0', '100', '', ''], [50, true]],
      ['NodeJS', [100, 100, '50', '0', '', ''], [25, true]],
      ['NodeJS', [100, 100, '50', '50', '', ''], [50, true]],
      ['NodeJS', [100, 100, '50', '100', '', ''], [75, true]],
      ['NodeJS', [100, 100, '100', '0', '', ''], [50, true]],
      ['NodeJS', [100, 100, '100', '50', '', ''], [75, true]],
      ['NodeJS', [100, 100, '100', '100', '', ''], [100, false]],
    ] as const)(
      '(%s):\t%j\t=>\t%j',
      (mode, [max, self, reviewer1, reviewer2, reviewer3, reviewer4], [averageScore, isAppealable]) => {
        const formData = { max, self, reviewer1, reviewer2, reviewer3, reviewer4 };
        const expected = { averageScore, isAppealable };

        expect(calcScore(mode, formData)).toEqual(expected);
      }
    );
  });

  describe('3 reviewer', () => {
    it.each([
      ['JSFE', [100, 100, '0', '0', '0', ''], [0, true]],
      ['JSFE', [100, 100, '0', '0', '50', ''], [17, true]],
      ['JSFE', [100, 100, '0', '0', '100', ''], [33, true]],
      ['JSFE', [100, 100, '0', '50', '0', ''], [17, true]],
      ['JSFE', [100, 100, '0', '50', '50', ''], [33, true]],
      ['JSFE', [100, 100, '0', '50', '100', ''], [50, true]],
      ['JSFE', [100, 100, '0', '100', '0', ''], [33, true]],
      ['JSFE', [100, 100, '0', '100', '50', ''], [50, true]],
      ['JSFE', [100, 100, '0', '100', '100', ''], [67, true]],
      ['JSFE', [100, 100, '100', '0', '0', ''], [33, true]],
      ['JSFE', [100, 100, '100', '0', '50', ''], [50, true]],
      ['JSFE', [100, 100, '100', '0', '100', ''], [67, true]],
      ['JSFE', [100, 100, '100', '50', '0', ''], [50, true]],
      ['JSFE', [100, 100, '100', '50', '50', ''], [67, true]],
      ['JSFE', [100, 100, '100', '50', '100', ''], [83, true]],
      ['JSFE', [100, 100, '100', '100', '0', ''], [67, true]],
      ['JSFE', [100, 100, '100', '100', '50', ''], [83, true]],
      ['JSFE', [100, 100, '100', '100', '100', ''], [100, false]],

      ['NodeJS', [100, 100, '0', '0', '0', ''], [0, true]],
      ['NodeJS', [100, 100, '0', '0', '50', ''], [25, true]],
      ['NodeJS', [100, 100, '0', '0', '100', ''], [50, true]],
      ['NodeJS', [100, 100, '0', '50', '0', ''], [25, true]],
      ['NodeJS', [100, 100, '0', '50', '50', ''], [50, true]],
      ['NodeJS', [100, 100, '0', '50', '100', ''], [75, true]],
      ['NodeJS', [100, 100, '0', '100', '0', ''], [50, true]],
      ['NodeJS', [100, 100, '0', '100', '50', ''], [75, true]],
      ['NodeJS', [100, 100, '0', '100', '100', ''], [100, false]],
      ['NodeJS', [100, 100, '100', '0', '0', ''], [50, true]],
      ['NodeJS', [100, 100, '100', '0', '50', ''], [75, true]],
      ['NodeJS', [100, 100, '100', '0', '100', ''], [100, false]],
      ['NodeJS', [100, 100, '100', '50', '0', ''], [75, true]],
      ['NodeJS', [100, 100, '100', '50', '50', ''], [75, true]],
      ['NodeJS', [100, 100, '100', '50', '100', ''], [100, false]],
      ['NodeJS', [100, 100, '100', '100', '0', ''], [100, false]],
      ['NodeJS', [100, 100, '100', '100', '50', ''], [100, false]],
      ['NodeJS', [100, 100, '100', '100', '100', ''], [100, false]],
    ] as const)(
      '(%s):\t%j\t=>\t%j',
      (mode, [max, self, reviewer1, reviewer2, reviewer3, reviewer4], [averageScore, isAppealable]) => {
        const formData = { max, self, reviewer1, reviewer2, reviewer3, reviewer4 };
        const expected = { averageScore, isAppealable };

        expect(calcScore(mode, formData)).toEqual(expected);
      }
    );
  });

  describe('4 reviewer', () => {
    it.each([
      ['JSFE', [100, 100, '0', '0', '0', '0'], [0, true]],
      ['JSFE', [100, 100, '0', '0', '0', '50'], [17, true]],
      ['JSFE', [100, 100, '0', '0', '0', '100'], [33, true]],
      ['JSFE', [100, 100, '0', '0', '50', '0'], [17, true]],
      ['JSFE', [100, 100, '0', '0', '50', '50'], [33, true]],
      ['JSFE', [100, 100, '0', '0', '50', '100'], [50, true]],
      ['JSFE', [100, 100, '0', '0', '100', '0'], [33, true]],
      ['JSFE', [100, 100, '0', '0', '100', '50'], [50, true]],
      ['JSFE', [100, 100, '0', '0', '100', '100'], [67, true]],
      ['JSFE', [100, 100, '0', '100', '0', '0'], [33, true]],
      ['JSFE', [100, 100, '0', '100', '0', '50'], [50, true]],
      ['JSFE', [100, 100, '0', '100', '0', '100'], [67, true]],
      ['JSFE', [100, 100, '0', '100', '50', '0'], [50, true]],
      ['JSFE', [100, 100, '0', '100', '50', '50'], [67, true]],
      ['JSFE', [100, 100, '0', '100', '50', '100'], [83, true]],
      ['JSFE', [100, 100, '0', '100', '100', '0'], [67, true]],
      ['JSFE', [100, 100, '0', '100', '100', '50'], [83, true]],
      ['JSFE', [100, 100, '0', '100', '100', '100'], [100, false]],
      ['JSFE', [100, 100, '50', '0', '0', '0'], [17, true]],
      ['JSFE', [100, 100, '50', '0', '0', '50'], [33, true]],
      ['JSFE', [100, 100, '50', '0', '0', '100'], [50, true]],
      ['JSFE', [100, 100, '50', '0', '50', '0'], [33, true]],
      ['JSFE', [100, 100, '50', '0', '50', '50'], [50, true]],
      ['JSFE', [100, 100, '50', '0', '50', '100'], [67, true]],
      ['JSFE', [100, 100, '50', '0', '100', '0'], [50, true]],
      ['JSFE', [100, 100, '50', '0', '100', '50'], [67, true]],
      ['JSFE', [100, 100, '50', '0', '100', '100'], [83, true]],
      ['JSFE', [100, 100, '50', '100', '0', '0'], [50, true]],
      ['JSFE', [100, 100, '50', '100', '0', '50'], [67, true]],
      ['JSFE', [100, 100, '50', '100', '0', '100'], [83, true]],
      ['JSFE', [100, 100, '50', '100', '50', '0'], [67, true]],
      ['JSFE', [100, 100, '50', '100', '50', '50'], [67, true]],
      ['JSFE', [100, 100, '50', '100', '50', '100'], [83, true]],
      ['JSFE', [100, 100, '50', '100', '100', '0'], [83, true]],
      ['JSFE', [100, 100, '50', '100', '100', '50'], [83, true]],
      ['JSFE', [100, 100, '50', '100', '100', '100'], [100, false]],
      ['JSFE', [100, 100, '50', '0', '0', '0'], [17, true]],
      ['JSFE', [100, 100, '100', '0', '0', '50'], [50, true]],
      ['JSFE', [100, 100, '100', '0', '0', '100'], [67, true]],
      ['JSFE', [100, 100, '100', '0', '50', '0'], [50, true]],
      ['JSFE', [100, 100, '100', '0', '50', '50'], [67, true]],
      ['JSFE', [100, 100, '100', '0', '50', '100'], [83, true]],
      ['JSFE', [100, 100, '100', '0', '100', '0'], [67, true]],
      ['JSFE', [100, 100, '100', '0', '100', '50'], [83, true]],
      ['JSFE', [100, 100, '100', '0', '100', '100'], [100, false]],
      ['JSFE', [100, 100, '100', '100', '0', '0'], [67, true]],
      ['JSFE', [100, 100, '100', '100', '0', '50'], [83, true]],
      ['JSFE', [100, 100, '100', '100', '0', '100'], [100, false]],
      ['JSFE', [100, 100, '100', '100', '50', '0'], [83, true]],
      ['JSFE', [100, 100, '100', '100', '50', '50'], [83, true]],
      ['JSFE', [100, 100, '100', '100', '50', '100'], [100, false]],
      ['JSFE', [100, 100, '100', '100', '100', '0'], [100, false]],
      ['JSFE', [100, 100, '100', '100', '100', '50'], [100, false]],
      ['JSFE', [100, 100, '100', '100', '100', '100'], [100, false]],
    ] as const)(
      '(%s):\t%j\t=>\t%j',
      (mode, [max, self, reviewer1, reviewer2, reviewer3, reviewer4], [averageScore, isAppealable]) => {
        const formData = { max, self, reviewer1, reviewer2, reviewer3, reviewer4 };
        const expected = { averageScore, isAppealable };

        expect(calcScore(mode, formData)).toEqual(expected);
      }
    );
  });

  describe('edge cases', () => {
    it.each([
      ['JSFE', [100, 100, '100', '100', '95', ''], [98, false]],
      ['JSFE', [100, 100, '100', '100', '96', ''], [99, false]],
      ['JSFE', [100, 100, '100', '100', '97', ''], [99, false]],
      ['JSFE', [100, 100, '100', '100', '98', ''], [99, false]],
      ['JSFE', [100, 100, '100', '100', '99', ''], [100, false]],

      ['NodeJS', [100, 100, '100', '95', '', ''], [98, false]],
      ['NodeJS', [100, 100, '100', '96', '', ''], [98, false]],
      ['NodeJS', [100, 100, '100', '97', '', ''], [99, false]],
      ['NodeJS', [100, 100, '100', '98', '', ''], [99, false]],
      ['NodeJS', [100, 100, '100', '99', '', ''], [100, false]],
    ] as const)(
      '(%s):\t%j\t=>\t%j',
      (mode, [max, self, reviewer1, reviewer2, reviewer3, reviewer4], [averageScore, isAppealable]) => {
        const formData = { max, self, reviewer1, reviewer2, reviewer3, reviewer4 };
        const expected = { averageScore, isAppealable };

        expect(calcScore(mode, formData)).toEqual(expected);
      }
    );
  });
});
