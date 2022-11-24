import { defineStore } from 'pinia';
import { UserInfo } from '@/interface';
import storage from '@/utils/storage';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => {
    return {
      token: storage.getStorageSync('token') || null,
      userInfo: storage.getStorageSync('userInfo') || null,
    };
  },
  actions: {
    setToken(token: string) {
      storage.setStorageSync('token', token);
      this.token = token;
    },
    setUserInfo(userInfo: UserInfo) {
      storage.setStorageSync('userInfo', userInfo);
      this.userInfo = userInfo;
    },
    login({ token, userInfo }: { token: string; userInfo: UserInfo }) {
      this.setToken(token);
      this.setUserInfo(userInfo);
    },
    logout() {
      storage.clearStorage();
      this.token = null;
      this.userInfo = null;
    },
  },
});
