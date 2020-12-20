export interface IUser {
  name: string;
  image: string;
}

export interface IProject {
  image: string;
  name: string;
  description: string;
  id: number;
  members?: IUser[];
}

export interface ITask {
  id: number;
  status: "new" | "markdown" | "expire";
  title: string;
  whenStarted: Date;
  user: IUser;
  boardId: number;
}

export interface IBoard {
  tasks: ITask[];
  boardId: number;
  title: string
}
