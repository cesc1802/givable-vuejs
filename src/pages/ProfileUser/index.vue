<script setup lang="ts">
import UsersIcon from "@/assets/icons/users.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import UserIcon from "@/assets/icons/user.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import MailIcon from "@/assets/icons/mail.svg";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import BoxIcon from "@/assets/icons/box.svg";
import AwardIcon from "@/assets/icons/award.svg";
import GiftIcon from "@/assets/icons/gift.svg";
import BoxNoDataFrame from "@/assets/icons/box-no-data-frame.svg";
import { PRODUCT_ITEMS } from "@/constant/product";

const tabs = ref([
  { title: "Tổng quan", value: "0" },
  { title: "Đã tặng", value: "1" },
  { title: "Đang nhận", value: "2" },
]);

const statistics = ref([
  {
    icon: BoxIcon,
    title: "Đang tặng",
    count: "01",
    color: "text-[#1A815F]",
  },
  {
    icon: GiftIcon,
    title: "Đã tặng",
    count: "04",
    color: "text-[#0164E3]",
  },
  {
    icon: UserIcon,
    title: "Đang nhận",
    count: "0",
    color: "text-[#7839EE]",
  },
  {
    icon: AwardIcon,
    title: "Đã nhận",
    count: "0",
    color: "text-[#444CE7]",
  },
]);

const productShared = ref([PRODUCT_ITEMS[0], PRODUCT_ITEMS[1]]);
const productGave = ref([
  PRODUCT_ITEMS[0],
  PRODUCT_ITEMS[1],
  PRODUCT_ITEMS[2],
  PRODUCT_ITEMS[3],
]);
</script>
<template>
  <div class="relative">
    <img
      src="/src/assets/images/background-2.jpg"
      alt="User Avatar"
      class="h-[345px] w-full bg-cover bg-center flex-shrink-0 aspect-square object-cover"
      style="object-position: -0.229px 0px / 100.032% 281.232%"
    />

    <!-- Avatar + Name -->
    <div class="flex flex-col items-center -mt-24 gap-6">
      <img
        src="/src/assets/images/personal-avatar.png"
        alt="User Avatar"
        class="w-[200px] h-[200px] flex-shrink-0 aspect-square rounded-full object-cover"
      />
      <h2 class="text-4xl text-heading font-semibold mt-2">Giselle</h2>
      <button
        class="flex items-center text-sm justify-center w-[190px] h-9 gap-3 bg-primary-50 border-primary-200 hover:bg-primary hover:text-ivory text-primary-300 rounded-[8px] transition cursor-pointer"
        @click="() => $router.push('/edit-profile')"
      >
        Chỉnh sửa hồ sơ cá nhân
      </button>
    </div>
  </div>

  <!-- Divider -->
  <div class="border-t border-primary mx-[200px] m-[44px]"></div>

  <!-- Information -->

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-[44px] px-[44px] py-[44px]">
    <!-- Personal information box card -->
    <div class="lg:col-span-1">
      <div
        class="border border-primary rounded-lg px-8 py-6 w-full max-w-xs bg-translate"
      >
        <h2 class="text-xl font-semibold text-center mb-4">Giới thiệu</h2>

        <ul class="space-y-2 text-sm text-heading">
          <li class="flex items-center gap-3">
            <UsersIcon class="text-[#0164E3] w-6 h-6" />
            <span>Tên: Giselle</span>
          </li>
          <li class="flex items-center gap-3">
            <UserIcon class="text-[#0164E3] w-6 h-6" />
            <span>Giới tính: Nữ</span>
          </li>
          <li class="flex items-center gap-3">
            <CalendarIcon class="text-[#4CA30D] w-6 h-6" />
            <span>Ngày sinh: 29/08/2004</span>
          </li>
          <li class="flex items-center gap-3">
            <MapPinIcon class="text-[#E04F16] w-6 h-6" />
            <span>Địa chỉ: 599 Phạm Văn Đồng</span>
          </li>
          <li class="flex items-center gap-3">
            <ClockIcon class="text-[#BC1B06] w-6 h-6" />
            <span>Ngày tham gia: 18/02/2025</span>
          </li>
          <li class="flex items-center gap-3">
            <PhoneIcon class="text-[#9F1AB1] w-6 h-6" />
            <span>Số điện thoại: 0123456789</span>
          </li>
          <li class="flex items-center gap-3">
            <MailIcon class="text-[#6927DA] w-6 h-6" />
            <span>Email: chuoibo@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="lg:col-span-4">
      <div class="flex items-center justify-between flex-wrap">
        <div>
          <h2 class="text-3xl text-heading font-semibold">Quản lý vật phẩm</h2>
          <p class="text-gray text-lg m-w-[525px] mt-2">
            Quản lý các vật phẩm bạn đang chia sẻ và theo dõi trạng thái của
            chúng
          </p>
        </div>
        <button
          class="flex items-center justify-center w-[176px] h-9 gap-3 bg-primary text-white rounded-[8px] hover:bg-primary transition cursor-pointer mt-3"
        >
          Chia sẻ vật phẩm mới
        </button>
      </div>

      <div class="card">
        <Tabs value="0" class="custom-tabs">
          <TabList>
            <Tab
              v-for="tab in tabs"
              :key="tab.title"
              :value="tab.value"
              as="div"
              class="flex items-center gap-2"
              >{{ tab.title }}</Tab
            >
          </TabList>
          <TabPanels>
            <TabPanel value="0" as="p" class="m-0">
              <div class="flex flex-wrap gap-10 justify-between p-10">
                <div
                  v-for="(item, idx) in statistics"
                  :key="idx"
                  :class="item.color"
                  class="w-[185px] h-[124px] flex flex-col items-center justify-center gap-2"
                >
                  <component
                    :is="item.icon"
                    class="w-14 h-14"
                    :class="item.color"
                  />
                  <p>{{ item.count }}</p>
                  <p>{{ item.title }}</p>
                </div>
              </div>
              <!-- Divider -->
              <div
                class="border-t border-dashed border-primary mx-[150px] m-[44px]"
              ></div>

              <h2 class="text-heading text-2xl mb-6">Đang chia sẻ</h2>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                <ProductBox
                  v-for="(item, idx) in productShared"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </TabPanel>
            <TabPanel value="1" as="p" class="m-0">
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-10"
              >
                <ProductBox
                  v-for="(item, idx) in productGave"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div
                class="w-full p-20 flex justify-center items-center border border-1 border-primary rounded-lg mt-10"
              >
                <BoxNoDataFrame />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep() {
  .custom-tabs .p-tablist-tab-list {
    background: transparent;
    justify-content: space-between;
  }

  .custom-tabs .p-tabpanels {
    background: transparent;
    padding: 0;
  }

  .custom-tabs .p-tab {
    width: 33%;
    justify-content: center;
    font-size: 14px;
  }

  .custom-tabs .p-tab-active {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
}
</style>
