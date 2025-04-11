<script lang="ts" setup>
import { useUserStore } from "@store/user";
import { InputText } from "primevue";
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

const userStore = useUserStore();
const router = useRouter();

const schema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không đúng định dạng"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const { handleSubmit, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  },
});

const [email] = defineField("email");
const [password] = defineField("password");

const onSubmit = handleSubmit((values) => {
  const fakeToken = "fake-jwt-token";
  const fakeUserInfo = {
    avatar: "https://via.placeholder.com/40",
    fullName: "John Doe",
  };

  localStorage.setItem("token", fakeToken);
  localStorage.setItem("userInfo", JSON.stringify(fakeUserInfo));
  userStore.setUser(fakeUserInfo);
  router.push({ name: "HomePage" });
});
</script>

<template>
  <Form
    class="form-login text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
    @keydown.prevent.enter="onSubmit"
    @submit="onSubmit"
  >
    <div>
      <h1 class="text-xl font-semibold mb-1">Đăng nhập</h1>
      <p class="text-sm">Thông tin đăng nhập để truy cập tài khoản.</p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Email</div>

        <Field v-slot="{ meta }" name="email">
          <InputText
            v-model="email"
            class="w-full"
            placeholder="Nhập địa chỉ mail của bạn"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
      <div class="text-sm">
        <div class="mb-2">Mật khẩu</div>
        <Field v-slot="{ meta }" name="password">
          <InputText
            v-model="password"
            class="w-full"
            placeholder="Nhập mật khẩu của bạn"
            type="password"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="password" class="text-red-600 text-sm mt-1" />
        </Field>
        <p
          class="mt-2 hover:underline cursor-pointer"
          @click="() => $router.push('/forgot-password')"
        >
          Quên mật khẩu?
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] border border-1 border-ivory rounded-lg cursor-pointer"
        @click="() => $router.push('/')"
      >
        <p class="text-sm">Hủy</p>
      </div>
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        @click="onSubmit()"
      >
        <p class="text-sm">Đăng nhập</p>
      </div>
    </div>
  </Form>
</template>

<style scoped>
.form-login {
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-placeholder-color: var(--color-ivory);
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-focus-border-color: var(--color-ivory);
  --p-inputtext-hover-border-color: var(--color-ivory);
  --p-inputtext-color: var(--color-ivory);
}
</style>
