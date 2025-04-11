import { IUser } from "./IUser";

export type IUserDTO = Omit<IUser, "fullName">;
