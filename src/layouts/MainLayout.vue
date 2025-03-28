<script lang="ts" setup>
import Header from "@components/Header/index.vue";
import Footer from "@components/Footer/index.vue";
import "./styles.css";
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="header bg-[#F9F4E8]">
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
        <router-view />
      </main>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>
