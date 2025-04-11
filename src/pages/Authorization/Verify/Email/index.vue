<script lang="ts" setup>
import { InputText } from "primevue";
import * as yup from "yup";
import { ErrorMessage, Field, useForm } from "vee-validate";

const schema = yup.object({
  codeVerify: yup.string().required("Vui lòng nhập mã xác thực"),
});

const { handleSubmit, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    codeVerify: null,
  },
});

const [codeVerify] = defineField("codeVerify");
const router = useRouter();

const onSubmit = handleSubmit((values) => {
  console.log("Mã xác thực:", values.codeVerify);
  // Call your API to verify the code here
  router.push("/login");
});
</script>

<template>
  <form
    class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
    @keydown.prevent.enter="onSubmit"
    @submit="onSubmit"
  >
    <div>
      <h1 class="text-xl font-semibold mb-1">Xác thực email</h1>
      <p class="text-sm">
        Chúng tôi đã gửi mã xác thực đến mail của banj. Vui lòng nhập mã xác
        thực.
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Mã xác thực</div>

        <Field v-slot="{ meta }" name="codeVerify">
          <InputText
            v-model="codeVerify"
            class="w-full"
            placeholder="Nhập mã"
            keyfilter="pint"
            type="number"
            :error="meta.touched && !meta.valid"
          />
          <ErrorMessage name="codeVerify" class="text-red-600 text-sm mt-1" />
        </Field>
      </div>
    </div>
    <div class="flex flex-col gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        @click="onSubmit()"
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
