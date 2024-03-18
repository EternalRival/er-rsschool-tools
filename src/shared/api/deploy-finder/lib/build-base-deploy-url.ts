import { BASE_URL } from '../model/constants';

export const buildBaseDeployUrl = (nickname: string, course: string, task: string): string =>
  `${BASE_URL}${nickname}-${course}/${task}`;
