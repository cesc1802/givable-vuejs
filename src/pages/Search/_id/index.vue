<script setup lang="ts">
import ClockIcon from "@assets/icons/clock.svg";
import StartIcon from "@assets/icons/star.svg";
import AlertTriangleIcon from "@/assets/icons/alert-triangle.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";

const safetyNote = [
  "Gặp gỡ ở nơi công cộng",
  "Không chia sẻ thông tin cá nhân",
  "Kiểm tra vật phẩm trước khi nhận",
  "Tin tưởng vào trực giác của bạn",
];
</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 md:px-8 py-[44px]">
    <!-- Left: Form -->
    <div class="lg:col-span-2">
      <div class="flex flex-col gap-5">
        <div class="relative">
          <div class="absolute top-4 left-4 z-10">
            <div
              class="bg-[url('/src/assets/images/avatar-3.png')] w-[57px] h-[57px] rounded-full bg-center bg-cover bg-no-repeat"
            ></div>
          </div>

          <!-- Ảnh sản phẩm -->
          <div
            class="bg-[url('/src/assets/images/product-8.jpg')] bg-no-repeat bg-cover bg-center"
            style="
              background-position-y: -88.493px;
              background-size: 100% 184.61%;
              height: 455px;
            "
          ></div>
        </div>
        <p class="text-3xl font-semibold text-heading">Áo len kem</p>
        <p class="text-heading text-lg">
          Đây là một chiếc áo len đã qua sử dụng, chất liệu vẫn còn tốt và giữ
          ấm hiệu quả.
        </p>
        <div class="flex flex-col gap-2 text-sm text-heading">
          <div class="flex items-center gap-2">
            <MapPinIcon class="w-5 h-5 text-[#0164E3]" />
            <span>Tân Phú, Hồ Chí Minh </span>
          </div>

          <div class="flex items-center gap-2">
            <ClockIcon class="w-5 h-5 text-[#107569]" />
            <span>11 tháng 2 ,2025 </span>
          </div>
          <div class="flex items-center gap-2">
            <StartIcon class="w-5 h-5 text-orange-500" />
            <span>Đã qua sử dụng </span>
          </div>
        </div>
        <button
          class="flex items-center justify-center w-[190px] h-9 gap-3 bg-primary text-white dark:text-primary-500 rounded-[8px] hover:bg-primary transition cursor-pointer mt-3"
        >
          Đăng ký nhận vật phẩm
        </button>
      </div>
    </div>
    <div class="lg:col-span-1">
      <QuickGuide class="p-6" />
      <div class="p-6">
        <h2
          class="text-2xl font-semibold text-heading mb-4 flex items-center gap-3"
        >
          <AlertTriangleIcon class="w-8 h-8 text-warning-500" />
          Lưu ý an toàn
        </h2>
        <ul class="ml-8">
          <li
            v-for="(note, idx) in safetyNote"
            :key="idx"
            class="text-heading list-disc"
          >
            {{ note }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
