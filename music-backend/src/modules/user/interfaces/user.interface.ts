export interface ICreateUser {
  email: string;
  password: string;
  name?: string;
}

export interface IUpdateUser {
  name?: string;
  password?: string;
}
