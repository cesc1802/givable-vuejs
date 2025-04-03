<script lang="ts" setup>
import { Form } from "@primevue/forms";
import { useUserStore } from "@store/user";

const codeVerify = ref(123);
</script>

<template>
  <div class="login-page">
    <div class="relative w-full h-[calc(100vh-12rem)]">
      <div
        class="absolute inset-0 bg-[url('src/assets/images/background-3.jpg')] bg-cover"
        style="
          background-position: -0.313px -396.286px;
          background-size: 100.043% 204.571%;
          background-repeat: no-repeat;
          background-color: lightgray;
        "
      ></div>

      <div class="absolute inset-0 bg-[#06372DA6]"></div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#F9F4E8]"
      >
        <div
          class="p-10 border-[3.5px] border-1 border-white rounded-[40px] px-8 py-10 bg-[linear-gradient(159deg,rgba(255,255,255,0.4)_3.01%,rgba(255,255,255,0)_103.3%)] backdrop-blur-[21px]"
        >
          <form class="form text-ivory p-5 text-start flex flex-col gap-5">
            <div>
              <h1 class="text-xl font-semibold mb-1">Xác thực email</h1>
              <p class="text-sm">
                Chúng tôi đã gửi mã xác thực đến mail của banj. Vui lòng nhập mã
                xác thực.
              </p>
            </div>

            <div class="flex flex-col gap-3">
              <div class="text-sm form-input">
                <div class="mb-2">Mã xác thực</div>
                <BInput
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-color: var(--color-ivory);
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-focus-border-color: var(--color-ivory);
  --p-inputtext-hover-border-color: var(--color-ivory);
  --p-inputtext-placeholder-color: var(--color-ivory);
}
</style>
