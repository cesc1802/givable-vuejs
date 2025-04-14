export interface IUser {
  fullName: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  email: string;
  phone?: string;
  address: string;
  gender: string;
  birthday: string;
}

export type IUserInfo = Pick<IUser, "avatar" | "fullName">;

export interface IUserFormRegister {
  userFullName: string;
  email: string;
  password: string;
  codeVerification: string;
  phoneNumber: string;
  address: string;
  gender: string;
  birthday: string;
}
