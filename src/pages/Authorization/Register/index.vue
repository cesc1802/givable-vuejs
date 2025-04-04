<script lang="ts" setup>
import { useUserStore } from "@store/user";
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";
import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/x-icon.svg";
import router from "@/router";

const userStore = useUserStore();

const schema = yup.object({
  fullName: yup.string().required("Vui lòng nhập họ và tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không đúng định dạng"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu tối thiểu 8 ký tự")
    .matches(/[A-Z]/, "Phải có chữ hoa")
    .matches(/[a-z]/, "Phải có chữ thường")
    .matches(/[^A-Za-z0-9]/, "Phải có ký tự đặc biệt"),
});

const REGISTER_FORM = {
  fullName: "",
  email: "",
  password: "",
};
const { handleSubmit, defineField } = useForm({
  validationSchema: schema,
  initialValues: REGISTER_FORM,
});

const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit((values) => {
  userStore.userFormRegister.userFullName = values.fullName;
  userStore.userFormRegister.email = values.email;
  userStore.userFormRegister.password = values.password;
  router.push("/verify-email");
});

const passwordRules = computed(() => {
  const pwd = password.value || "";
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
</script>

<template>
  <form
    class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
    @submit="onSubmit"
  >
    <div>
      <h1 class="text-xl font-semibold mb-1">Đăng ký</h1>
      <p class="text-sm">Tạo tài khoản mới để bắt đầu .</p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="form-input text-sm">
        <label class="mb-2">Họ và tên</label>
        <Field v-slot="{ field, meta }" name="fullName">
          <BInput
            v-bind="field"
            class="w-full"
            placeholder="Nhập họ và tên của bạn"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="fullName" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>

      <div class="form-input text-sm">
        <label class="mb-2">Email</label>
        <Field v-slot="{ field, meta }" name="email">
          <BInput
            v-bind="field"
            class="w-full"
            placeholder="Nhập email của bạn"
            :error="meta.touched && !meta.valid"
          />
        </Field>
        <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
      </div>
      <div class="text-sm">
        <label class="mb-2">Mật khẩu</label>
        <Field v-slot="{ meta }" name="password">
          <BInput
            v-model="password"
            type="password"
            class="w-full"
            placeholder="Nhập mật khẩu"
            :error="meta.touched && !meta.valid"
          />
          <p class="mt-2">Mật khẩu cần</p>
          <ul class="mt-2 space-y-1 text-sm text-white">
            <li
              v-for="rule in passwordRulesList"
              :key="rule.key"
              class="flex items-center gap-2"
            >
              <span>
                <CheckIcon v-if="rule.valid" class="w-4 h-4 text-primary" />
                <XIcon v-else class="w-4 h-4 text-error-700" />
              </span>
              {{ rule.label }}
            </li>
          </ul>
        </Field>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-ivory px-[14px] py-[8px] border border-1 border-ivory rounded-lg cursor-pointer"
      >
        <p class="text-sm">Hủy</p>
      </div>
      <button
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        type="submit"
      >
        <p class="text-sm">Đăng ký</p>
      </button>
    </div>
  </form>
</template>

<style scoped></style>
