<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="email" required type="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" required type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '@store/user';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import './styles.css';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();
    const router = useRouter();

    const handleLogin = () => {
      const fakeToken = 'fake-jwt-token';
      const fakeUserInfo = {
        id: '1',
        avatar: 'https://via.placeholder.com/40',
        name: 'John Doe',
      };

      localStorage.setItem('token', fakeToken);
      localStorage.setItem('userInfo', JSON.stringify(fakeUserInfo));
      userStore.setUser(fakeUserInfo);
      router.push({ name: 'HomePage' });
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>
