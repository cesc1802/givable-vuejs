<script lang="ts" setup>
import { Form } from "@primevue/forms";
import { useUserStore } from "@store/user";
import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/x-icon.svg";

const userFullName = ref("");
const email = ref("");
const password = ref("");

const passwordRules = computed(() => {
  const pwd = password.value;
  return {
    validLength: pwd.length >= 8,
    hasUpper: /[A-Z]/.test(pwd),
    hasLower: /[a-z]/.test(pwd),
    hasSpecial: /[^A-Za-z0-9]/.test(pwd),
  };
});

const passwordRulesList = computed(() => [
  {
    key: "validLength",
    label: "Ít nhất 8 ký tự",
    valid: passwordRules.value.validLength,
  },
  {
    key: "hasUpper",
    label: "Một chữ cái viết hoa",
    valid: passwordRules.value.hasUpper,
  },
  {
    key: "hasLower",
    label: "Một chữ cái viết thường",
    valid: passwordRules.value.hasLower,
  },
  {
    key: "hasSpecial",
    label: "Một 1 ký tự đặc biệt",
    valid: passwordRules.value.hasSpecial,
  },
]);

const handleRegister = () => {
  console.log("Registering user...");
};
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
          <Form
            v-slot="$form"
            class="form text-ivory p-5 text-start flex flex-col gap-5"
          >
            <div>
              <h1 class="text-xl font-semibold mb-1">Tạo hồ sơ</h1>
              <p class="text-sm">
                Vui lòng hoàn thành hồ sơ của bạn để bắt đầu sử dụng.
              </p>
            </div>

            <div class="flex flex-col gap-3">
              <div class="text-sm form-input">
                <div class="mb-2">
                  Họ và tên <span class="text-error-600">*</span>
                </div>
                <BInput
                  v-model="userFullName"
                  name="userFullName"
                  class="w-full"
                  placeholder="Nhập họ và tên của bạn"
                  type="text"
                  :error="false"
                />
              </div>
              <div class="text-sm form-input">
                <div class="mb-2">
                  Số điện thoại <span class="text-error-600">*</span>
                </div>
                <BInput
                  v-model="userFullName"
                  name="userFullName"
                  class="w-full"
                  placeholder="Nhập số điện thoại của bạn"
                  type="text"
                  :error="false"
                />
              </div>
              <div class="text-sm form-input">
                <div class="mb-2">
                  Địa chỉ <span class="text-error-600">*</span>
                </div>
                <BInput
                  v-model="userFullName"
                  name="userFullName"
                  class="w-full"
                  placeholder="Nhập địa chỉ của bạn"
                  type="text"
                  :error="false"
                />
              </div>
              <div class="text-sm form-input">
                <div class="mb-2">Giới tính</div>
                <BInput
                  v-model="userFullName"
                  name="userFullName"
                  class="w-full"
                  placeholder="Chọn giới tính"
                  type="text"
                  :error="false"
                />
              </div>
              <div class="text-sm form-input">
                <div class="mb-2">Ngày sinh</div>
                <BInput
                  v-model="userFullName"
                  name="userFullName"
                  class="w-full"
                  placeholder="dd/mm/yyyy"
                  type="text"
                  :error="false"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
              <div
                class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] border border-1 border-ivory rounded-lg cursor-pointer"
              >
                <p class="text-sm">Hủy</p>
              </div>
              <div
                class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
                @click="handleRegister"
              >
                <p class="text-sm">Tạo hồ sơ</p>
              </div>
            </div>
          </Form>
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
