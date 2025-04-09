<template>
  <div class="flex bg-ivory dark:bg-primary-400">
    <!-- Sidebar -->
    <SidebarManagement />

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <!-- Header  -->
      <HeaderManagement />

      <!-- Content -->
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderManagement from "./ManagementLayout/HeaderManagement.vue";
import SidebarManagement from "./ManagementLayout/SidebarManagement.vue";
</script>

<style scoped></style>
