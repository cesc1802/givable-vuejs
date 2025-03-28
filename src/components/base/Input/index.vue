<template>
  <input :value="value" @input="updateValue($event)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './styles.css';

export default defineComponent({
  name: 'InputComponent',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const updateValue = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:value', target.value);
    };
    return { updateValue };
  },
});
</script>
