export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  verified: boolean;

  password: string;
  role: UserRoleTypes;

  createdAt: Date;
  updatedAt: Date;

  provider: string;
}

export enum UserRoleTypes {
  user,
  admin
}
