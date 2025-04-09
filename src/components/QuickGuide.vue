<script setup lang="ts">
const steps = [
  {
    title: "Đăng vật phẩm",
    desc: "Đăng thông tin và hình ảnh vật phẩm bạn muốn chia sẻ.",
  },
  {
    title: "Xem xét yêu cầu",
    desc: "Kiểm tra danh sách người yêu cầu và chọn người nhận phù hợp trong mục “Quản lý”.",
  },
  {
    title: "Liên hệ và trao đổi",
    desc: "Sau khi chấp nhận, số điện thoại sẽ được chia sẻ để 2 bên liên lạc.",
  },
  {
    title: "Xác nhận khi hoàn tất",
    desc: "Xác nhận khi trao vật phẩm thành công.",
  },
];
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold text-heading mb-4">Hướng dẫn nhanh</h3>
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex gap-4 relative pb-10 last:pb-0 mt-5"
    >
      <div class="relative z-10">
        <div
          class="w-8 h-8 rounded-full bg-primary text-white dark:text-primary-500 flex items-center justify-center text-sm font-semibold"
        >
          {{ index + 1 }}
        </div>

        <div
          v-if="index < steps.length - 1"
          class="absolute left-1/2 top-6 h-full w-px border-l border-dashed border-primary translate-x-[-50%]"
        />
      </div>

      <div class="max-w-[366px]">
        <h4 class="font-semibold text-base text-heading">
          {{ step.title }}
        </h4>
        <p class="text-sm mt-1 leading-relaxed text-heading">
          {{ step.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
