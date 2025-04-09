<script setup lang="ts"></script>

<template>
  <div
    class="border border-1 border-primary rounded-lg flex-column gap-2 p-5 bg-transparent"
  >
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
