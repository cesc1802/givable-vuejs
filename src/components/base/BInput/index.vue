<script setup lang="ts">
import InputText from "primevue/inputtext";

interface Props {
  modelValue?: string | number;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: boolean;
  inputClass?: string | string[]; // Add this prop
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "",
  type: "text",
  disabled: false,
  error: false,
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="b-input-wrapper">
    <InputText
      v-bind="$attrs"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :class="[inputClass, { 'p-invalid': error }]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.b-input-wrapper {
  --p-inputtext-border-color: var(--color-primary);
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-primary);
  --p-inputtext-focus-border-color: var(--color-primary);
  --p-inputtext-hover-border-color: var(--color-primary);
  --p-inputtext-placeholder-color: var(--color-gray);
}

.dark .b-input-wrapper {
  --p-inputtext-placeholder-color: var(--color-ivory);
}
</style>
