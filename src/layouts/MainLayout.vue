<script lang="ts" setup>
import Footer from "@components/Footer/index.vue";
import Header from "@components/Header/index.vue";
import "./styles.css";
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="header bg-ivory dark:bg-primary-400">
      <slot name="header">
        <Header />
      </slot>
    </header>
    <div class="flex-1 overflow-auto">
      <!-- <aside class="sidebar">
        <slot name="sidebar">
          <Sidebar />
        </slot>
      </aside> -->
      <main>
        <div
          class="flex items-center justify-center bg-[#fdf5ec] dark:bg-primary-400 relative min-h-[calc(100vh-362px)]"
        >
          <div
            class="absolute inset-0 bg-[url('/src/assets/images/background-volunteer-holding-box.svg')] bg-no-repeat bg-cover bg-center opacity-40"
          ></div>
          <div class="w-full z-10">
            <router-view />
          </div>
        </div>
      </main>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>
