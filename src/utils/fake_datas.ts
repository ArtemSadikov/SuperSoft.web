import {IBoard, IProject, ITask, IUser} from './interfaces';
import avatar from '../assets/images/logo192.png';

const MICHAEL: IUser = {name: 'Михаил Куракин', image: avatar};
const VIKTORIYA: IUser = {name: 'Виктория Макарова', image: avatar};
const PHILIPP: IUser = {name: 'Филипп Шеметов', image: avatar};
const KATE: IUser = {name: 'Гусева Екатерина', image: avatar};
const ARTEM: IUser = {name: 'Садиков Артем', image: avatar};

export const FAKE_PROJECTS: IProject[] = [
  {
    image: avatar,
    name: 'Welcome!',
    description:
      'Что-то про проект, его описание и все такое и так далее и тому подобное и прочее и всмысле что это, это проект, называется here, вот тебе и херe\n\n «Ты был Избранником! Предрекали, что ты уничтожишь ситхов, а не примкнешь к ним! Восстановишь равновесие Силы, а не ввергнешь её во мрак!»\n\n«Ненавижу!»\n\n«Ты был мне братом, Энакин. Я любил тебя!»\n\n— Оби-Ван Кеноби и Дарт  Вейдер',
    id: 0,
    members: [MICHAEL, VIKTORIYA, PHILIPP, KATE, ARTEM],
  },
  {
    image: avatar,
    name: 'Get started',
    description: 'wow',
    id: 1,
    members: [MICHAEL, VIKTORIYA, PHILIPP, KATE, ARTEM],
  },
  {
    image: avatar,
    name: 'Tap',
    description: 'wow',
    id: 2,
    members: [MICHAEL, VIKTORIYA, PHILIPP, KATE, ARTEM],
  },
  {
    image: avatar,
    name: 'Here',
    description: 'wow',
    id: 3,
    members: [MICHAEL, VIKTORIYA, PHILIPP, KATE, ARTEM],
  },
  {
    image: avatar,
    name: 'Or here',
    description: 'wow',
    id: 4,
    members: [MICHAEL, VIKTORIYA, PHILIPP, KATE, ARTEM],
  },
];

export const FAKE_TASKS: ITask[] = [
  {
    id: 0,
    title: "0",
    status: "new",
    user: ARTEM,
    whenStarted: new Date(2020, 12, 12),
    boardId: 0,
  },
  {
    id: 1,
    title: "1",
    status: "markdown",
    user: MICHAEL,
    whenStarted: new Date(2020, 12, 12),
    boardId: 0,
  },
  {
    id: 2,
    title: "2",
    status: "expire",
    user: PHILIPP,
    whenStarted: new Date(2020, 12, 12),
    boardId: 0,
  }
]

export const FAKE_TASKS_1: ITask[] = [
  {
    id: 3,
    title: "3",
    status: "new",
    user: ARTEM,
    whenStarted: new Date(2020, 12, 12),
    boardId: 1,
  },
  {
    id: 4,
    title: "4",
    status: "markdown",
    user: MICHAEL,
    whenStarted: new Date(2020, 12, 12),
    boardId: 1,
  },
  {
    id: 5,
    title: "5",
    status: "expire",
    user: PHILIPP,
    whenStarted: new Date(2020, 12, 12),
    boardId: 1,
  }
]

export const FAKE_TASKS_2: ITask[] = [
  {
    id: 6,
    title: "6",
    status: "new",
    user: ARTEM,
    whenStarted: new Date(2020, 12, 12),
    boardId: 2,
  },
  {
    id: 7,
    title: "7",
    status: "markdown",
    user: MICHAEL,
    whenStarted: new Date(2020, 12, 12),
    boardId: 2,
  },
  {
    id: 8,
    title: "8",
    status: "expire",
    user: PHILIPP,
    whenStarted: new Date(2020, 12, 12),
    boardId: 2,
  }
]


export const BOARDS: IBoard[] = [
  {
    tasks: FAKE_TASKS,
    boardId: 0,
    title: 'New',
  },
  {
    tasks: FAKE_TASKS_1,
    boardId: 1,
    title: 'In progress',
  },
  {
    tasks: FAKE_TASKS_2,
    boardId: 2,
    title: 'Closed',
  },
];
