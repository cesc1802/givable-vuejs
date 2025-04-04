<script lang="ts">
import { useUserStore } from "@store/user";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const userStore = useUserStore();
    const router = useRouter();

    const handleLogin = () => {
      const fakeToken = "fake-jwt-token";
      const fakeUserInfo = {
        id: "1",
        avatar: "https://via.placeholder.com/40",
        name: "John Doe",
      };

      localStorage.setItem("token", fakeToken);
      localStorage.setItem("userInfo", JSON.stringify(fakeUserInfo));
      userStore.setUser(fakeUserInfo);
      router.push({ name: "HomePage" });
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>

<template>
  <Form
    class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]"
    @keydown.prevent.enter="handleLogin"
  >
    <div>
      <h1 class="text-xl font-semibold mb-1">Bạn quên mật khẩu ?</h1>
      <p class="text-sm">
        Chọn phương thức để có thể lấy lại mật khẩu của bạn.
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <div class="text-sm form-input">
        <div class="mb-2">Email</div>
        <BInput
          v-model="email"
          name="title"
          class="w-full"
          placeholder="Nhập địa chỉ mail của bạn"
          type="text"
          :error="false"
        />
      </div>
      <div class="text-sm">
        <div class="mb-2">Mật khẩu</div>
        <BInput
          v-model="password"
          name="title"
          class="w-full"
          placeholder="Nhập mật khẩu của bạn"
          type="password"
          :error="false"
        />
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
      >
        <p class="text-sm">Hủy</p>
      </div>
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
        @click="handleLogin"
      >
        <p class="text-sm">Đăng nhập</p>
      </div>
    </div>
  </Form>
</template>

<style scoped></style>
