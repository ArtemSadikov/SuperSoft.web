export interface IUser {
  name: string;
}

export interface IProject {
  image: string;
  name: string;
  description: string;
  id: number;
  members?: IUser[];
}
