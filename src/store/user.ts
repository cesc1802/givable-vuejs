import type { IUserFormRegister, IUserInfo } from "@/models/user";
import { defineStore } from "pinia";

const initUserInfo: IUserInfo = {
  id: "",
  avatar: "",
  name: "",
};

const initUserFormRegister: IUserFormRegister = {
  userFullName: "",
  email: "",
  password: "",
  codeVerification: "",
  phoneNumber: "",
  address: "",
  gender: "",
  birthday: "",
};

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {} as IUserInfo,
    userFormRegister: {} as IUserFormRegister,
  }),
  actions: {
    setUser(userInfo: IUserInfo) {
      this.userInfo = userInfo;
    },
    clearUser() {
      this.userInfo = initUserInfo;
    },
    logout() {
      this.userInfo = initUserInfo;
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
    },
  },
  getters: {
    isLogin: (state) => {
      return !!state.userInfo.id;
    },
  },
});
