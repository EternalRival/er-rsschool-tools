import type { FC } from 'react';

type Props = {
  nickname: string;
  course: string;
  task: string;
};

export const URLList: FC<Props> = ({ course, nickname, task }) => (
  <div>
    Course: {course}
    <br />
    Nickname: {nickname}
    <br />
    Task: {task}
  </div>
);

// (
//   <ul /* v-if="inputs.nickname && inputs.course && inputs.task" */ className="p-2">
//     <li /* v-for="option in urlOptions" :key="option" ref="urlOptionsElements" */>
//       <a>1{/* {{ option }} */}</a>
//     </li>
//   </ul>
// );
