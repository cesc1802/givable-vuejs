<script setup lang="ts">
import { DatePicker, InputText, Select } from "primevue";

const formValue = ref({
  name: "Bùi Thanh Nhàn",
  phone: "0123456789",
  address: "599 Phạm Văn Đồng",
  gender: "female",
  birthday: new Date("2000-08-29"),
});

const genderOpt = [
  { name: "Nam", code: "male" },
  { name: "Nữ", code: "female" },
];
</script>
<template>
  <div
    class="edit-profile-page flex flex-col items-center justify-center w-full p-[44px] gap-8 dark:bg-[#00715d9c]"
  >
    <h1 class="text-4xl font-semibold">Chỉnh sửa hồ sơ</h1>
    <img src="/src/assets/images/personal-avatar.png" />
    <form class="w-[360px] flex flex-col gap-4">
      <div>
        <p class="text-heading text-sm mb-2">Họ và tên</p>
        <InputText
          v-model="formValue.name"
          placeholder="Nhập họ và tên"
          class="w-full"
        />
      </div>
      <div>
        <p class="text-heading text-sm mb-2">Số điện thoại</p>
        <InputText
          v-model="formValue.phone"
          placeholder="Nhập số điện thoại"
          class="w-full"
        />
      </div>
      <div>
        <p class="text-heading text-sm mb-2">Địa chỉ</p>
        <InputText
          v-model="formValue.address"
          placeholder="Nhập địa chỉ"
          class="w-full"
        />
      </div>
      <div>
        <p class="text-heading text-sm mb-2">Giới tính</p>
        <BSelect
          v-model="formValue.gender"
          :options="genderOpt"
          optionLabel="name"
          optionValue="code"
          class="w-full"
        />
      </div>
      <div>
        <p class="text-heading text-sm mb-2">Ngày sinh</p>
        <DatePicker
          v-model="formValue.birthday"
          class="w-full"
          placeholder="dd/mm/yyyy"
          date-format="dd/mm/yy"
        />
      </div>

      <div class="justify-center items-center flex">
        <button
          class="flex items-center justify-center w-[115px] h-10 gap-3 bg-primary text-white dark:bg-ivory dark:text-primary-500 rounded-[8px] hover:bg-primary transition cursor-pointer mt-3"
          @click="() => $router.push('/profile')"
        >
          Lưu thay đổi
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.edit-profile-page {
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-primary);
  --p-inputtext-color: var(--color-gray);
  --p-inputtext-focus-border-color: var(--color-primary);
  --p-inputtext-hover-border-color: var(--color-primary);
}

.dark .edit-profile-page {
  --p-inputtext-color: var(--color-ivory);
  --p-inputtext-placeholder-color: var(--color-gray-500);
}
</style>
