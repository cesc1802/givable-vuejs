<script setup lang="ts"></script>

<template>
  <div class="card flex-column gap-2 p-5 bg-transparent">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #00715d;
  border-radius: 8px;
}
</style>
