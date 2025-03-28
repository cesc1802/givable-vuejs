<template>
  <div>
    <h1>Header:</h1>
    <div>Hi: {{ userStore.userInfo.name }}</div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '@store/user';
import { ENV_CONFIG } from '@utils/config';
import { defineComponent } from 'vue';
import './styles.css';

export default defineComponent({
  name: 'Header',
  setup() {
    const userStore = useUserStore();
    console.log('ENV_CONFIG', ENV_CONFIG, userStore.userInfo);
    return { userStore };
  },
});
</script>
