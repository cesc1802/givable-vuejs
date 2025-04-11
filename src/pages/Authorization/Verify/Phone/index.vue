<script lang="ts" setup>
const otp = ref(["", "", "", ""]);

const handleInput = (e: Event, index: number) => {
  const target = e.target as HTMLInputElement;
  otp.value[index] = target.value.slice(-1);

  if (target.value && target.nextElementSibling) {
    (target.nextElementSibling as HTMLInputElement).focus();
  }
};

const handleKeydown = (e: KeyboardEvent, index: number) => {
  const target = e.target as HTMLInputElement;
  if (e.key === "Backspace" && !target.value && target.previousElementSibling) {
    (target.previousElementSibling as HTMLInputElement).focus();
  }
};
</script>

<template>
  <form class="form text-ivory p-3 text-start flex flex-col gap-3 w-[320px]">
    <div>
      <h1 class="text-xl font-semibold mb-1">Nhập mã của bạn</h1>
    </div>

    <div class="flex gap-3 justify-center">
      <input
        v-for="(digit, index) in otp"
        :key="index"
        v-model="otp[index]"
        maxlength="1"
        type="text"
        class="w-[71px] h-10 text-center border rounded-lg text-xl focus:outline-none focus:border-ivory bg-transparent text-ivory border-ivory"
        @input="handleInput($event, index)"
        @keydown="handleKeydown($event, index)"
      />
    </div>
    <p class="text-sm">
      Don’t receive OTP ?
      <span class="font-semibold hover:underline cursor-pointer"
        >Resend again</span
      >
    </p>

    <div class="flex flex-col gap-4 font-semibold">
      <div
        class="flex items-center justify-center gap-3 text-gray px-[14px] py-[8px] bg-ivory rounded-lg cursor-pointer"
      >
        <p class="text-sm">Tiếp tục</p>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
