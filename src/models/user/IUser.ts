export interface IUser {
  fullName: string;
  email: string;
  phone?: string;
  address: string;
  gender: string;
  birthday: string;
}

export interface IUserInfo {
  id: string;
  avatar?: string;
  name: string;
}

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
