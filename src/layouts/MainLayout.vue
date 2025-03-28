<script lang="ts">
import Header from '@components/Header/index.vue';
import Sidebar from '@components/Sidebar/index.vue';
import { defineComponent } from 'vue';
import './styles.css';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Sidebar,
  },
});
</script>

<template>
  <div class="main-layout">
    <header class="header">
      <slot name="header">
        <Header />
      </slot>
    </header>
    <div class="content">
      <aside class="sidebar">
        <slot name="sidebar">
          <Sidebar />
        </slot>
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>
