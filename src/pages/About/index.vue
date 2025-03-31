<template>
  <section>
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8"
    >
      <div class="flex-row justify-center items-center col-span-2">
        <h2 class="text-[#00715D] font-bold text-4xl mb-6 text-center">
          Givables
        </h2>
        <div class="text-[#535C6B] text-2xl leading-8 text-center">
          Givables là nền tảng kết nối những người muốn cho đi vật phẩm với
          những người đang cần. Chúng tôi tin rằng việc cho và nhận không chỉ
          giúp tiết kiệm tài nguyên mà còn xây dựng một cộng đồng gắn kết và yêu
          thương.
        </div>
      </div>

      <div class="relative w-full">
        <img src="/src/assets/images/thumbnail-2.png" alt="Givables Image" />
      </div>
    </div>
  </section>

  <!-- COMMITMENT INFORMAITON -->
  <section>
    <div class="grid grid-cols-4 bg-[#0B5949] px-[184.5px] py-[44px]">
      <div
        v-for="(item, idx) in COMMITMENT_INFORMAITON"
        :key="idx"
        class="items-center gap-[20px] flex flex-col justify-center text-center"
      >
        <component :is="item.icon" class="text-white w-[100px] h-[100px]" />

        <div>
          <p class="text-[#F9F4E8] text-[20px] mb-1">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- ITEM SEARCH PROCESS -->

  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8 p-[44px]">
      <div class="flex flex-col gap-5 items-center">
        <h2 class="text-3xl font-semibold text-[#00715D]">
          Quy trình nhận vật phẩm
        </h2>
        <BoxCard
          v-for="(item, idx) in ITEM_SEARCH_PROCESS"
          :key="idx"
          class="max-w-[338px] flex flex-col gap-2"
        >
          <template #header>
            <div class="font-semibold text-lg">
              {{ idx + 1 }}. {{ item.label }}
            </div>
          </template>
          <template #content>
            <div class="text-[#535C6B] mt-2">
              {{ item.description }}
            </div>
          </template>
          <template #footer>
            <div class="flex justify-end">
              <div
                class="border-none rounded-lg p-2"
                :class="[item.backgroundIcon]"
              >
                <component
                  :is="item.icon"
                  class="w-[24px] h-[24px]"
                  :class="[item.colorIcon]"
                />
              </div>
            </div>
          </template>
        </BoxCard>
      </div>

      <div class="col-span-2 relative w-full">
        <img src="/src/assets/images/thumbnail-3.png" alt="Givables Image" />
      </div>
    </div>
  </section>

  <!-- Divider -->
  <div class="border-t border-[#E6D5AB] my-6 mx-[300px]"></div>

  <!-- ITEM GIVE PROCESS -->

  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8 p-[44px]">
      <div class="col-span-2 relative w-full">
        <img src="/src/assets/images/thumbnail-4.png" alt="Givables Image" />
      </div>
      <div class="flex flex-col gap-5 items-center">
        <h2 class="text-3xl font-semibold text-[#00715D]">
          Quy trình trao vật phẩm
        </h2>
        <BoxCard
          v-for="(item, idx) in ITEM_GIVE_PROCESS"
          :key="idx"
          class="max-w-[338px] flex flex-col gap-2"
        >
          <template #header>
            <div class="font-semibold text-lg">
              {{ idx + 1 }}. {{ item.label }}
            </div>
          </template>
          <template #content>
            <div class="text-[#535C6B] mt-2">
              {{ item.description }}
            </div>
          </template>
          <template #footer>
            <div class="flex justify-end">
              <div
                class="border-none rounded-lg p-2"
                :class="[item.backgroundIcon]"
              >
                <component
                  :is="item.icon"
                  class="w-[24px] h-[24px]"
                  :class="[item.colorIcon]"
                />
              </div>
            </div>
          </template>
        </BoxCard>
      </div>
    </div>
  </section>

  <!-- RULES OF USE -->
  <section>
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-[44px] bg-[#0B5949] text-white"
    >
      <div class="flex flex-col gap-5 items-center col-span-2">
        <h2 class="text-3xl font-semibold">Nguyên tắc sử dụng</h2>
        <div class="relative w-full flex items-center justify-center">
          <GiftIcon class="w-24 h-24" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in RULES_OF_USE"
            :key="idx"
            class="flex flex-col gap-2 px-10 py-8 border border-dashed rounded-lg border-[#F9F4E8] text-[#F9F4E8]"
          >
            <h3 class="text-2xl font-semibold text-center mb-2">
              {{ item.title }}
            </h3>
            <ul class="list-disc list-inside text-lg flex flex-col gap-2">
              <li v-for="(rule, i) in item.rules" :key="i">{{ rule }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GiftIcon from "@assets/icons/gift.svg";
import MapPinIcon from "@assets/icons/map-pin.svg";
import PocketIcon from "@assets/icons/pocket.svg";
import StartIcon from "@assets/icons/star.svg";
import TickCircleIcon from "@assets/icons/tick-circle.svg";
import SearchIcon from "@assets/icons/search.svg";
import SendIcon from "@assets/icons/send.svg";
import CameraIcon from "@assets/icons/camera.svg";
import HeartIcon from "@assets/icons/heart.svg";
import UsersIcon from "@assets/icons/users.svg";

import BoxCard from "@components/base/BoxCard/index.vue";

const COMMITMENT_INFORMAITON = [
  {
    label: "Hoàn toàn miễn phí",
    icon: GiftIcon,
  },
  {
    label: "Tìm kiếm linh hoạt",
    icon: MapPinIcon,
  },
  {
    label: "Bảo mật thông tin",
    icon: PocketIcon,
  },
  {
    label: "Cộng đồng tin cậy",
    icon: StartIcon,
  },
];

const ITEM_SEARCH_PROCESS = [
  {
    label: "Tìm vật phẩm",
    description:
      "Tìm kiếm vật phẩm theo danh mục hoặc địa điểm. Xem thông tin chi tiết và hình ảnh của vật phẩm để chọn lựa phù hợp.",
    icon: SearchIcon,
    colorIcon: "text-[#0164E3]",
    backgroundIcon: "bg-[#C1D7FB]",
  },
  {
    label: "Gửi yêu cầu",
    description:
      "Gửi yêu cầu cho người nhận bằng cách nhấn nút “ Yêu cầu “ trên trang vật phẩm. Chờ phản hồi từ họ.",
    icon: SendIcon,
    colorIcon: "text-[#875BF7]",
    backgroundIcon: "bg-[#DDD6FE]",
  },
  {
    label: "Nhận vật phẩm",
    description:
      "Khi được chấp nhận, bạn sẽ nhận được thông tin liên hệ. Bạn có thể sắp xếp gặp hoặc dùng phương thức vận chuyển khác.",
    icon: TickCircleIcon,
    colorIcon: "text-[#22C55E]",
    backgroundIcon: "bg-[#E1F6E7]",
  },
];

const ITEM_GIVE_PROCESS = [
  {
    label: "Đăng vật phẩm",
    description:
      "Chụp ảnh và mô tả vật phẩm bạn muốn cho. Thêm thông tin về tình trạng và địa điểm để người nhận dễ tìm kiếm.",
    icon: CameraIcon,
    colorIcon: "text-[#0164E3]",
    backgroundIcon: "bg-[#C1D7FB]",
  },
  {
    label: "Chọn người nhận",
    description:
      "Chụp ảnh và mô tả vật phẩm bạn muốn cho. Thêm thông tin về tình trạng và địa điểm để người nhận dễ tìm kiếm.",
    icon: UsersIcon,
    colorIcon: "text-[#875BF7]",
    backgroundIcon: "bg-[#DDD6FE]",
  },
  {
    label: "Trao vật phẩm và xác nhận",
    description:
      "Trao vật phẩm và xác nhận lại ở Givables để hoàn tất giao dịch.",
    icon: HeartIcon,
    colorIcon: "text-[#E31B54]",
    backgroundIcon: "bg-[#FECDD6]",
  },
];

const RULES_OF_USE = [
  {
    title: "Đối với người cho",
    rules: [
      "Đăng hình ảnh và mô tả chính xác về vật phẩm",
      "Chỉ đăng những vật phẩm còn sử dụng được",
      "Phản hồi yêu cầu trong thời gian sớm nhất có thể",
      "Nên ưu tiên người thật sự cần dùng vật phẩm Giữ đúng lịch hẹn giao vật phẩm",
    ],
  },
  {
    title: "Đối với người nhận",
    rules: [
      "Chỉ yêu cầu vật phẩm thật sự cần",
      "Giải thích rõ lý do cần vật phẩm",
      "Tôn trọng quyết định của người cho",
      "Đúng giờ khi nhận vật phẩm Cảm ơn sau khi nhận",
    ],
  },
];
</script>

<style scoped></style>
