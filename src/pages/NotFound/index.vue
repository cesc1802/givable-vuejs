<template>
  <div class="not-found">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './styles.css';

export default defineComponent({
  name: 'NotFound',
});
</script>
