import { DeployFinder } from '@/components/deploy-finder';
import type { FC } from 'react';

const Page: FC = () => <DeployFinder />;

export default Page;

/* 
<main>
    <form>
      <fieldset>
        <legend>Введите данные</legend>
        <label>
          Github nickname:
          <input v-model="inputs.nickname" class="lowercase" />
        </label>
        <label>
          Course:
          <input v-model="inputs.course" class="uppercase" />
        </label>
        <label>
          Taskname:
          <input v-model="inputs.task" class="lowercase" />
        </label>
      </fieldset>
    </form>
    <ul v-if="inputs.nickname && inputs.course && inputs.task" class="p-2">
      <li v-for="option in urlOptions" :key="option" ref="urlOptionsElements">
        <a>{{ option }}</a>
      </li>
    </ul>
  </main>
*/
