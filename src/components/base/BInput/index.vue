<script setup lang="ts">
import InputText from "primevue/inputtext";

interface Props {
  modelValue?: string | number;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "",
  type: "text",
  disabled: false,
  error: false,
});

const emit = defineEmits(["update:modelValue"]);

const inputClass = computed(() => {
  return [
    "b-input",
    {
      "b-input-error": props.error,
    },
  ];
});
</script>
<template>
  <div class="b-input-wrapper">
    <InputText
      v-bind="$attrs"
      :class="inputClass"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.b-input-wrapper {
  position: relative;
  width: 100%;
}

.b-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  font-size: 1rem;
  color: #495057;
  background-color: transparent;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

.b-input:focus {
  border-color: var(--color-primary) !important;
  outline: 0;
}

.b-input:hover {
  border-color: var(--color-primary) !important;
  outline: 0;
}

.b-input-error {
  border-color: #dc3545;
}

.b-input-error:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
</style>
