<script lang="ts" setup>
import { InputNumber } from "primevue";

const codeVerify = ref(123);
</script>

<template>
  <form class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]">
    <div>
      <h1 class="text-xl font-semibold mb-1">Xác thực email</h1>
      <p class="text-sm">
        Chúng tôi đã gửi mã xác thực đến mail của banj. Vui lòng nhập mã xác
        thực.
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Mã xác thực</div>
        <InputNumber
          v-model="codeVerify"
          class="w-full"
          placeholder="Nhập mã"
          type="text"
          :error="false"
        />
      </div>
    </div>
    <div class="flex flex-col gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        @click="() => $router.push('/profile-create')"
      >
        <p class="text-sm">Xác thực email</p>
      </div>
      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] border border-1 border-ivory rounded-lg cursor-pointer"
      >
        <p class="text-sm">Gửi lại mã</p>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form {
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-placeholder-color: var(--color-ivory);
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-focus-border-color: var(--color-ivory);
  --p-inputtext-hover-border-color: var(--color-ivory);
  --p-inputtext-color: var(--color-ivory);
}
</style>
