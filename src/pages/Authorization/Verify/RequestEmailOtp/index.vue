<script lang="ts" setup>
import { IconField, InputIcon, InputText } from "primevue";
import MailIcon from "@/assets/icons/mail.svg";
import * as yup from "yup";
import { ErrorMessage, Field, useForm } from "vee-validate";
import router from "@/router";

const schema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email không đúng định dạng"
    )
    .email("Email không đúng định dạng"),
});

const { handleSubmit, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "",
  },
});

const [email] = defineField("email");

const onSubmit = handleSubmit((values) => {
  console.log("Sending OTP to email:", values.email);
  // Call your API to send the OTP here
  router.push("/verify-email");
});
</script>

<template>
  <form
    class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
    @keydown.prevent.enter="onSubmit"
    @submit="onSubmit"
  >
    <div>
      <h1 class="text-xl font-semibold mb-1">Lấy mã</h1>
      <p class="text-sm">Nhập email của bạn để có thể nhận mã.</p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Email</div>
        <Field v-slot="{ meta }" name="email">
          <IconField>
            <InputIcon class="!top-[48%]">
              <MailIcon class="w-5 h-5 text-ivory"
            /></InputIcon>

            <InputText
              v-model="email"
              class="w-full"
              placeholder="Nhập email"
              type="text"
              :error="meta.touched && !meta.valid"
            />
          </IconField>
          <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
    </div>
    <div class="flex flex-col gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        @click="onSubmit()"
      >
        <p class="text-sm">Tiếp tục</p>
      </div>
      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] border border-1 border-ivory rounded-lg cursor-pointer"
        @click="() => $router.push('/login')"
      >
        <p class="text-sm">Hủy</p>
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
