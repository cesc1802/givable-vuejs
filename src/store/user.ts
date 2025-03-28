import type { IUserInfo } from '@model/user';
import { defineStore } from 'pinia';

const initUserInfo: IUserInfo = {
  id: '',
  avatar: '',
  name: '',
};

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {} as IUserInfo,
  }),
  actions: {
    setUser(userInfo: IUserInfo) {
      this.userInfo = userInfo;
    },
    clearUser() {
      this.userInfo = initUserInfo;
    },
  },
});
