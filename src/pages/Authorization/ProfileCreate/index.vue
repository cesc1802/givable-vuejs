<script lang="ts" setup>
import { InputText } from "primevue";
import * as yup from "yup";
import { Field, ErrorMessage, useForm } from "vee-validate";

const schema = yup.object({
  userFullName: yup.string().required("Vui lòng nhập họ và tên"),
  phoneNumber: yup.string().required("Vui lòng nhập số điện thoại"),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
  gender: yup.string().required("Vui lòng chọn giới tính"),
  birthday: yup.string().required("Vui lòng nhập ngày sinh"),
});

const { handleSubmit, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    userFullName: "",
    phoneNumber: "",
    address: "",
    gender: "",
    birthday: "",
  },
});

const [userFullName] = defineField("userFullName");
const [phoneNumber] = defineField("phoneNumber");
const [address] = defineField("address");
const [gender] = defineField("gender");
const [birthday] = defineField("birthday");

const onSubmit = handleSubmit((values) => {
  console.log("Đăng ký thành công:", values);
  // Call your API to register the user here
  // router.push("/home");
});

const genderOpt = [
  { name: "Nam", code: "male" },
  { name: "Nữ", code: "female" },
];
</script>

<template>
  <Form
    class="form-profile-create text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
    @keydown.prevent.enter="onSubmit"
    @submit="onSubmit"
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
        <Field v-slot="{ meta }" name="userFullName">
          <InputText
            v-model="userFullName"
            name="userFullName"
            class="w-full"
            placeholder="Nhập họ và tên của bạn"
            type="text"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="userFullName" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
      <div class="text-sm form-input">
        <div class="mb-2">
          Số điện thoại <span class="text-error-600">*</span>
        </div>
        <Field v-slot="{ meta }" name="phoneNumber">
          <InputText
            v-model="phoneNumber"
            class="w-full"
            placeholder="Nhập số điện thoại của bạn"
            type="text"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="phoneNumber" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
      <div class="text-sm form-input">
        <div class="mb-2">Địa chỉ <span class="text-error-600">*</span></div>
        <Field v-slot="{ meta }" name="address">
          <InputText
            v-model="address"
            class="w-full"
            placeholder="Nhập số địa chỉ của bạn"
            type="text"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="address" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
      <div class="text-sm form-input">
        <div class="mb-2">Giới tính</div>
        <Field v-slot="{ meta }" name="gender">
          <InputText
            v-model="gender"
            class="w-full"
            placeholder="Chọn giới tính của bạn"
            type="text"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="gender" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
      <div class="text-sm form-input">
        <div class="mb-2">Ngày sinh</div>
        <Field v-slot="{ meta }" name="birthday">
          <InputText
            v-model="birthday"
            name="birthday"
            class="w-full"
            placeholder="dd/mm/yyyy"
            type="text"
            :error="false"
          />
          <ErrorMessage name="birthday" class="text-red-600 text-sm mt-1" />
        </Field>
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
        @click="onSubmit()"
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
