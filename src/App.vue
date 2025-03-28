<template>
  <router-view />
</template>

<script lang="ts">
import { useUserStore } from '@store/user';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const userStore = useUserStore();
    try {
      const userInfoStorage = localStorage.getItem('userInfo');
      if (userInfoStorage) {
        const userInfo = JSON.parse(userInfoStorage);
        userStore.setUser(userInfo);
      }
    } catch (error) {
      console.log(error);
    }
  },
});
</script>
