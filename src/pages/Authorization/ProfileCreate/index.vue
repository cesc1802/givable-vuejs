<script lang="ts" setup>
import { InputText } from "primevue";

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
  <Form
    class="form-profile-create text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
  >
    <div>
      <h1 class="text-xl font-semibold mb-1">Tạo hồ sơ</h1>
      <p class="text-sm">
        Vui lòng hoàn thành hồ sơ của bạn để bắt đầu sử dụng.
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Họ và tên <span class="text-error-600">*</span></div>
        <InputText
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
        <InputText
          v-model="userFullName"
          name="userFullName"
          class="w-full"
          placeholder="Nhập số điện thoại của bạn"
          type="text"
          :error="false"
        />
      </div>
      <div class="text-sm form-input">
        <div class="mb-2">Địa chỉ <span class="text-error-600">*</span></div>
        <InputText
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
        <InputText
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
        <InputText
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
</template>

<style scoped>
.form-profile-create {
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-placeholder-color: var(--color-ivory);
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-focus-border-color: var(--color-ivory);
  --p-inputtext-hover-border-color: var(--color-ivory);
  --p-inputtext-color: var(--color-ivory);
}
</style>
