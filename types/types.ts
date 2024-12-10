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

export interface IResponseUser {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

export interface IUser {
  id: number;
  email: string;
  token: string;
}
