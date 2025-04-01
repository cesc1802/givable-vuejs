<script lang="ts" setup>
import Textarea from "primevue/textarea";

interface Props {
  modelValue: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  error?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  rows: 5,
  cols: 30,
  placeholder: "",
  error: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  }
);

watch(internalValue, (newValue) => {
  emit("update:modelValue", newValue);
});

const textareaClass = computed(() => {
  return [
    "b-textarea",
    {
      "b-textarea-error": props.error,
    },
  ];
});
</script>

<template>
  <div class="b-textarea-wrapper">
    <Textarea
      v-bind="$attrs"
      v-model="internalValue"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
      :class="textareaClass"
    />
  </div>
</template>

<style scoped>
.b-textarea-wrapper {
  position: relative;
  width: 100%;
}

.b-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  font-size: 1rem;
  color: #495057;
  background-color: transparent;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  resize: vertical; /* Allow vertical resizing */
}

.b-textarea:focus {
  border-color: var(--color-primary) !important;
  outline: 0;
}

.b-textarea:hover {
  border-color: var(--color-primary) !important;
  outline: 0;
}

.b-textarea-error {
  border-color: #dc3545;
}

.b-textarea-error:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
</style>
