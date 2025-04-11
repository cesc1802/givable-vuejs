<script lang="ts" setup>
import SmartphoneIcon from "@/assets/icons/smartphone.svg";
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

    <div class="flex flex-col gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] hover:bg-ivory hover:text-gray border border-1 border-ivory rounded-lg cursor-pointer"
        @click="() => $router.push('/request-email-otp')"
      >
        <img src="/src/assets/images/Google-icon.png" />
        <p class="text-sm">Email Verification</p>
      </div>

      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] hover:bg-ivory hover:text-gray border border-1 border-ivory rounded-lg cursor-pointer"
        @click="() => $router.push('/verify-phone')"
      >
        <SmartphoneIcon class="w-6 h-6 text-green-light-500" />
        <p class="text-sm">Phone Verification</p>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
