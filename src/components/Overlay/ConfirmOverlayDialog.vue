<script setup lang="ts">
import { ConfirmDialog } from "primevue";
import AlertOctagonIcon from "@/assets/icons/alert-octagon.svg";

defineProps<{
  group: string;
  iconClassStyle?: string;
}>();
</script>
<template>
  <ConfirmDialog
    :group="group"
    class="!bg-ivory !border-ivory !rounded-lg"
    style="width: 26%"
  >
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="flex flex-col items-center p-8 bg-ivory rounded-lg gap-8">
        <AlertOctagonIcon class="text-error-700 w-[120px] h-[120px]" />

        <p class="mb- text-3xl font-medium text-heading">
          {{ message.message }}
        </p>
        <div class="grid grid-cols-2 gap-4 w-full">
          <button
            class="bg-error-700 text-ivory rounded-lg h-12 hover:bg-error-600"
            @click="acceptCallback"
          >
            {{ message.acceptLabel }}
          </button>
          <button
            class="border-1 border-primary text-primary border rounded-lg h-12"
            label="Cancel"
            outlined
            @click="rejectCallback"
          >
            {{ message.rejectLabel }}
          </button>
        </div>
      </div>
    </template>
  </ConfirmDialog>
</template>
