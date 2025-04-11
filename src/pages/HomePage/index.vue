<template>
  <div class="home-page">
    <div class="relative w-full h-[400px]">
      <img
        src="/src/assets/images/side-view-hands-keeping-field-1.png"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-[#06372DA6]"></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-ivory"
      >
        <h2 class="text-4xl font-bold">
          Nền tảng trao và nhận đồ
          <span
            class="bg-ivory text-primary dark:text-primary-500 px-2 rounded-md tracking-[-0.96px]"
            >miễn phí</span
          >
        </h2>
        <p class="text-[20px] mt-[22px] max-w-[600px] mx-auto">
          Kết nối những người muốn cho đi với những người cần, góp phần xây dựng
          cộng đồng chia sẻ bền vững.
        </p>
        <div class="mt-8 flex gap-4">
          <button
            class="bg-primary dark:bg-primary-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-primary transition cursor-pointer"
          >
            Chia sẻ vật phẩm
          </button>
          <button
            class="border border-white text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-primary transition cursor-pointer"
          >
            Tìm vật phẩm
          </button>
        </div>
      </div>
    </div>

    <div class="bg-ivory dark:bg-primary-400">
      <div class="grid grid-cols-3 max-w-screen-xl mx-auto py-[44px] gap-x-8">
        <div
          v-for="item in items"
          :key="item.label"
          class="flex items-center gap-[24px]"
        >
          <div class="p-[10px] bg-primary rounded-lg">
            <component
              :is="item.icon"
              class="text-white dark:text-primary-500 w-8 h-8"
            />
          </div>

          <div>
            <p
              class="text-[#101828] dark:text-ivory text-lg font-semibold mb-1"
            >
              {{ item.label }}
            </p>
            <p class="text-gray dark:text-ivory text-[16px] max-w-[360px]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 bg-primary-100 px-[184.5px] py-[44px]">
      <div
        v-for="(item, idx) in statisticalItems"
        :key="idx"
        class="flex items-center gap-[20px]"
      >
        <component :is="item.icon" class="text-white w-16 h-16" />

        <div>
          <p class="text-ivory text-[30px] font-semibold mb-1">
            {{ item.label }}
          </p>
          <p class="text-ivory text-[16px]">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <section>
      <div
        class="flex items-center justify-center bg-[#fdf5ec] dark:bg-primary-400 py-12 px-6 relative"
      >
        <div
          class="absolute inset-0 bg-[url('/src/assets/images/background-volunteer-holding-box.svg')] bg-no-repeat bg-cover bg-center opacity-40"
        ></div>

        <div
          class="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10"
        >
          <div class="flex justify-center">
            <img
              src="/src/assets/images/volunteer-holding-box-containing-donations-charity.png"
              alt="Volunteer holding donation box"
              class="w-[350px] md:w-[400px]"
            />
          </div>

          <div class="text-left">
            <h2
              class="text-3xl md:text-4xl font-bold text-heading dark:text-ivory tracking-[-0.96px]"
            >
              Chia sẻ vật phẩm
            </h2>
            <p
              class="text-gray dark:text-ivory mt-3 text-lg leading-relaxed max-w-[450px]"
            >
              Bạn có thể tìm kiếm hoặc chia sẻ các sản phẩm tại đây, góp phần
              lan tỏa yêu thương và giúp đỡ những người có hoàn cảnh khó khăn.
            </p>

            <div class="mt-5 flex gap-4">
              <button
                class="flex items-center justify-center w-[191px] gap-3 border border-primary text-primary px-[28px] py-4 rounded-[8px] hover:bg-primary hover:text-white transition cursor-pointer"
              >
                <SearchIcon class="w-5 h-5" /> Tìm kiếm
              </button>
              <button
                class="flex items-center justify-center w-[191px] gap-3 bg-primary text-white dark:text-primary-500 px-[28px] py-4 rounded-[8px] hover:bg-primary transition cursor-pointer"
              >
                <GiftIcon class="w-5 h-5" /> Chia sẻ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="bg-primary dark:bg-primary-100 flex-row justify-center items-center gap-8"
      >
        <h1 class="text-[60px] font-bold text-ivory mb-6">
          Tham gia cộng đồng
        </h1>
        <p
          class="px-[200px] mb-6 text-center text-4xl text-ivory flex items-center justify-center"
        >
          <span class="w-[1040px]">
            Nếu bạn có vật phẩm cần cho, hãy chia sẻ để xây dựng một cộng đồng
            bền vững và ấm áp.</span
          >
        </p>
        <p class="justify-center flex items-center mb-8">
          <button
            class="border-primary bg-ivory py-4 px-[28px] w-[190px] rounded-[25px] text-primary dark:text-primary-500 text-[20px] cursor-pointer"
            style="box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
          >
            Đăng ký ngay
          </button>
        </p>
        <p class="justify-center flex items-center px-[65px] pb-[44px]">
          <img src="/src/assets/images/thumbnail-1.png" class="w-full" />
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import GiftIcon from "@assets/icons/gift.svg";
import HeartIcon from "@assets/icons/heart.svg";
import MapPinIcon from "@assets/icons/map-pin.svg";
import SearchIcon from "@assets/icons/search.svg";
import SendIcon from "@assets/icons/send.svg";
import TickCircleIcon from "@assets/icons/tick-circle.svg";
import UsersIcon from "@assets/icons/users.svg";
import "./styles.css";

const items = ref([
  {
    label: "Chọn vật phẩm",
    description:
      "Tìm kiếm và chọn vật phẩm bạn cần từ danh sách các vật phẩm được chia sẻ miễn phí.",
    icon: SearchIcon,
  },
  {
    label: "Gửi yêu cầu",
    description:
      "Gửi yêu cầu nhận vật phẩm và chờ người cho xác nhận yêu cầu của bạn.",
    icon: SendIcon,
  },
  {
    label: "Nhận vật phẩm",
    description:
      "Sau khi được chấp nhận, bạn sẽ nhận được thông tin liên hệ để nhận vật phẩm.",
    icon: TickCircleIcon,
  },
]);

const statisticalItems = ref([
  {
    label: "1,234",
    description: "Vật phẩm đã cho",
    icon: GiftIcon,
  },
  {
    label: "567",
    description: "Thành viên",
    icon: UsersIcon,
  },
  {
    label: "32",
    description: "Tỉnh thành",
    icon: MapPinIcon,
  },
  {
    label: "890",
    description: "Lượt trao đổi",
    icon: HeartIcon,
  },
]);
</script>
<style scoped>
.banner {
  background: url("@assets/images/side-view-hands-keeping-field-1") lightgray
    50% / cover no-repeat;
}
</style>
