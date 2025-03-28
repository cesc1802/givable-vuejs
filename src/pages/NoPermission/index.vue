<template>
  <div class="no-permission">
    <h1>No Permission</h1>
    <p>You do not have permission to access this page.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './styles.css';

export default defineComponent({
  name: 'NoPermission',
});
</script>
