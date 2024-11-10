import { apiResponseRawSchema } from '../schemas/api-response-raw.schema';
import createStudentList from './create-student-list';

import type { RequestParams } from '../schemas/request-params.schema';

const BASE_URL = 'https://app.rs.school';
const GRATITUDE_ENDPOINT = '/api/feedback/gratitude';
const PAGE_SIZE = 1e6;
const REVALIDATE_IN_MINUTES = 5;
const FETCH_OPTIONS = { next: { revalidate: REVALIDATE_IN_MINUTES * 60 } };

async function getGratitudeListRaw() {
  const response = await fetch(`${BASE_URL}${GRATITUDE_ENDPOINT}?pageSize=${PAGE_SIZE}`, FETCH_OPTIONS);

  return apiResponseRawSchema.parse(await response.json());
}

export default async function getGratitudesSummary(params: RequestParams) {
  const data = await getGratitudeListRaw();

  let studentList = createStudentList({ rawGratitudes: data.content }).toJSON();

  if (params.q) {
    studentList = studentList.filter((student) => student.github.toLowerCase().includes(params.q.toLowerCase()));
  }

  studentList.sort((a, b) => {
    const sort = params.sort === 'senders' ? 'senders' : 'receivers';

    return a[sort].count === b[sort].count ? a.github.localeCompare(b.github) : b[sort].count - a[sort].count;
  });

  return studentList;
}
