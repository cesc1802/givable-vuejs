<script lang="ts" setup>
import { IconField, InputIcon, InputText } from "primevue";
import MailIcon from "@/assets/icons/mail.svg";
const codeVerify = ref();
</script>

<template>
  <form class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]">
    <div>
      <h1 class="text-xl font-semibold mb-1">Lấy mã</h1>
      <p class="text-sm">Nhập email của bạn để có thể nhận mã.</p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Email</div>
        <IconField>
          <InputIcon class="!top-[48%]">
            <MailIcon class="w-5 h-5 text-ivory"
          /></InputIcon>

          <InputText
            v-model="codeVerify"
            class="w-full"
            placeholder="Nhập email"
            type="text"
            :error="false"
          />
        </IconField>
      </div>
    </div>
    <div class="flex flex-col gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        @click="() => $router.push('/verify-email')"
      >
        <p class="text-sm">Tiếp tục</p>
      </div>
      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] border border-1 border-ivory rounded-lg cursor-pointer"
      >
        <p class="text-sm">Hủy</p>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
