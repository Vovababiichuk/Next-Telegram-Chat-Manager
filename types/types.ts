export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseUserData {
  user: IUser;
  token: string;
}

export interface IUserData {
  name?: string | undefined;
  email: string;
  password: string;
}

export interface IErrors {
  name?: string;
  email?: string;
  password?: string;
  global?: string | null;
}
