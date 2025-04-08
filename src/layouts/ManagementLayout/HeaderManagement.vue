<script setup lang="ts">
import { Breadcrumb } from "primevue";
import { getPageTitle } from "@/utils/helpers";

const visible = ref(false);
const route = useRoute();

const breadcumb = computed(() => {
  return route.matched.map((item) => ({
    label: item.meta.breadcrumb,
    to: { name: item.name },
  }));
});
const items = ref([{ label: "Trang chủ" }, { label: "Quản lý tài khoản" }]);

const titlePage = computed(() => getPageTitle(String(route.name ?? "")));
</script>
<template>
  <ModalCreateAccount v-if="visible" v-model:modelValue="visible" />
  <div
    class="flex items-center justify-between mb-6 border-b border-[#F0E4C7] pb-6"
  >
    <div class="flex flex-col gap-3">
      <!-- Breadcrumb -->
      <div class="card flex justify-start">
        <Breadcrumb class="breadcumb" :model="items" />
      </div>

      <!-- Page Title -->
      <h1 class="text-5xl text-heading">
        {{ titlePage }}
      </h1>
    </div>

    <button
      class="flex items-center justify-center w-[176px] h-9 gap-2 bg-primary text-white rounded-[8px] hover:bg-primary transition cursor-pointer mt-3"
      @click="() => (visible = true)"
    >
      Tạo tài khoản mới <span class="text-2xl -mt-[6px]">+</span>
    </button>
  </div>
</template>

<style scoped>
.breadcumb {
  --p-breadcrumb-background: var(--color-ivory);
  --p-breadcrumb-padding: 0;
}
</style>
