<script lang="ts" setup>
import Select from "primevue/select";
import CheckIcon from "@/assets/icons/check.svg";

interface SelectOption {
  name: string;
  code: string | number;
}

interface Props {
  modelValue: string | number | boolean | null | undefined;
  options: SelectOption[];
  optionLabel?: string;
  optionValue?: string;
  placeholder?: string;
  disabled?: boolean;
  class?: string;
  variant?: "filled" | "outlined";
  error?: boolean | string;
  size?: "small" | "medium" | "large";
  showClear?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  optionLabel: "name",
  optionValue: "code",
  placeholder: "Select option",
  disabled: false,
  variant: "filled",
  error: false,
  size: "medium",
});

const emit = defineEmits(["update:modelValue", "change"]);

const localModelValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    localModelValue.value = newValue;
  }
);

watch(localModelValue, (newValue) => {
  emit("update:modelValue", newValue);
  emit("change", newValue);
});

const selectClass = computed(() => {
  return [
    "custom-select",
    props.variant === "outlined" ? "select-outlined" : "select-filled",
    props.error ? "select-error" : "",
    `select-${props.size}`,
    props.class,
  ];
});
</script>

<template>
  <div class="custom-select-wrapper">
    <Select
      v-model="localModelValue"
      :options="options"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="selectClass"
      :showClear="showClear"
      :highlightOnSelect="false"
    >
      <template #option="slotProps">
        <slot name="option" :option="slotProps.option">
          <div class="flex items-center justify-between w-full">
            <div class="custom-option">{{ slotProps.option[optionLabel] }}</div>
            <CheckIcon v-if="slotProps.selected" class="w-5 h-5 text-primary" />
          </div>
        </slot>
      </template>

      <template #header>
        <slot name="header"></slot>
      </template>

      <template #footer>
        <slot name="footer"></slot>
      </template>
    </Select>
    <div v-if="error && typeof error === 'string'" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<style>
.custom-select-wrapper {
  width: 100%;
  position: relative;
}

.custom-select {
  width: 100%;
  transition: all 0.2s;
  border: 1px solid var(--color-primary) !important;
  background-color: var(--color-ivory) !important;
}

.custom-select-wrapper .p-select.p-disabled {
  background-color: #e0e0e0 !important;
  cursor: not-allowed;
}
</style>
