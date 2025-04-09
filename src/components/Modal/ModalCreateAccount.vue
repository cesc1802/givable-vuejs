<script setup lang="ts">
import { Dialog, InputNumber } from "primevue";

const show = defineModel({ required: true, default: false });

const companyOptions = [
  { name: "Công ty A", code: "companyA" },
  { name: "Công ty B", code: "companyB" },
  { name: "Công ty C", code: "companyC" },
];

const formValue = ref({
  name: "",
  age: undefined,
  email: "",
  phone: null,
  company: null,
  companyEmail: "",
  note: "",
});
</script>
<template>
  <Dialog
    v-model:visible="show"
    header="Edit Profile"
    class="!border-primary rounded-lg"
    pt:mask:class="bg-[#66708599]"
    :style="{ width: '30rem', height: 'auto' }"
  >
    <template #container="{ closeCallback }">
      <div class="px-5 py-6 bg-ivory rounded-xl">
        <h2 class="text-primary font-semibold text-lg mb-4">
          Tạo tài khoản mới
        </h2>

        <form class="form-create-account flex flex-col gap-3">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <div class="text-heading text-sm mb-2 font-medium">Tên</div>
              <BInput v-model="formValue.name" placeholder="Nhập tên" />
            </div>
            <div>
              <div class="text-heading text-sm mb-2 font-medium">Tuổi</div>
              <BInput v-model="formValue.age" placeholder="Nhập tuổi" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="text-heading text-sm mb-2 font-medium">Email</div>
              <BInput
                v-model="formValue.email"
                class="w-full"
                placeholder="Nhập email"
              />
            </div>
            <div>
              <div class="text-heading text-sm mb-2 font-medium">
                Số điện thoại
              </div>
              <InputNumber
                v-model="formValue.phone"
                placeholder="Nhập số điện thoại"
                :useGrouping="false"
                fluid
              />
            </div>
          </div>
          <div>
            <div class="text-heading text-sm mb-2 font-medium">Công ty</div>
            <BSelect
              v-model="formValue.company"
              placeholder="Nhập tên"
              :options="companyOptions"
            />
          </div>
          <div>
            <div class="text-heading text-sm mb-2 font-medium">
              Email công ty
            </div>
            <BInput
              v-model="formValue.companyEmail"
              class="w-full"
              placeholder="Nhập email công ty"
            />
          </div>
          <div>
            <div class="text-heading text-sm mb-2 font-medium">Note</div>
            <BTextarea v-model="formValue.note" placeholder="Nhập note" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button class="bg-primary text-ivory rounded-lg h-[34px]">
              Lưu
            </button>
            <button
              class="border border-1 border-primary rounded-lg text-primary"
              type="button"
              @click="closeCallback"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </template>
  </Dialog>
</template>

<style scoped>
::v-deep(.ModalCreateAccount) {
  border: 1px solid var(--color-primary) !important;
}

.form-create-account {
  --p-inputtext-background: var(--color-ivory);
  --p-inputtext-border-color: var(--color-primary);
  --p-inputtext-hover-border-color: var(--color-primary);
  --p-inputtext-focus-border-color: var(--color-primary);
}
</style>
