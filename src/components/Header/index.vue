<script lang="ts" setup>
import { useUserStore } from "@store/user";
import { ENV_CONFIG } from "@utils/config";
import HeartIcon from "@assets/icons/heart.svg";
import SearchIcon from "@assets/icons/search.svg";
import GiftIcon from "@assets/icons/gift.svg";
import AlertIcon from "@assets/icons/alert-octagon.svg";
import SunIcon from "@assets/icons/sun.svg";
import MessageQuestionIcon from "@assets/icons/message-question.svg";
import LogOutIcon from "@/assets/icons/log-out.svg";
import UserPlusIcon from "@/assets/icons/user-plus.svg";
import Popover from "primevue/popover";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";

import "./styles.css";

const userStore = useUserStore();
console.log("ENV_CONFIG", ENV_CONFIG, userStore.userInfo);

const menuItems = ref([
  {
    label: "Tìm kiếm",
    icon: SearchIcon,
    link: "/search",
  },
  {
    label: "Chia sẻ",
    icon: GiftIcon,
    link: "/share",
  },
  {
    label: "Giới thiệu",
    icon: AlertIcon,
    link: "/about",
  },
  {
    label: "FAQ",
    icon: MessageQuestionIcon,
    link: "/faq",
  },
]);

const router = useRouter();

const route = useRoute();

const isPathActive = (path: string) => {
  return route.path.startsWith(path) ? "text-primary" : "text-[#535C6B]";
};

const handleDirectPage = (item: any) => {
  router.push(item.link);
};

const op = ref();
const toggle = (event) => {
  op.value?.toggle(event);
};

const userMenuOptions = [
  {
    title: "Trang cá nhân",
    action: () => {
      router.push("/personal");
      op.value?.hide();
    },
  },
  {
    title: "Quản lý tài khoản",
    action: () => {
      router.push("/account-management");
      op.value?.hide();
    },
  },
  {
    title: "Đăng xuất",
    action: () => {
      userStore.logout();
      router.push("/");
      op.value?.hide();
    },
  },
];
</script>
<template>
  <div class="header flex items-center justify-between">
    <div class="flex gap-[24px]">
      <router-link
        to="/"
        class="flex items-center gap-[8px] cursor-pointer"
        @click="() => router.push('/')"
      >
        <HeartIcon class="text-primary w-8 h-8" />
        <span class="text-primary font-bold text-[24px]">Givables</span>
      </router-link>
      <ul class="flex items-center">
        <li
          v-for="(item, idx) in menuItems"
          :key="idx"
          class="flex items-center gap-[8px] text-[14px] p-[10px] hover:text-primary cursor-pointer"
          :class="[isPathActive(item.link)]"
          @click="handleDirectPage(item)"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span> {{ item.label }}</span>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-[20px]">
      <button
        class="border-gray w-9 h-9 border-1 border rounded-lg justify-center flex items-center cursor-pointer"
      >
        <SunIcon class="w-4 h-4" />
      </button>
      <div v-if="userStore.isLogin" class="flex items-center gap-2">
        <img src="@assets/images/avatar.png" class="inline" />
        <div
          class="flex items-center gap-2 cursor-pointer hover:underline"
          @click="toggle"
        >
          <span class="text-[14px] text-primary">Giselle </span>
          <ChevronDownIcon class="w-6 h-6 text-primary" />
        </div>

        <Popover ref="op">
          <div class="w-[200px] bg-ivory p-4">
            <ul class="flex flex-col gap-4">
              <li
                v-for="(item, index) in userMenuOptions"
                :key="index"
                class="hover:text-primary cursor-pointer"
                @click="item.action"
              >
                {{ item.title }}
              </li>
            </ul>
          </div>
        </Popover>
      </div>
      <template v-else>
        <div
          class="flex items-center gap-3 text-primary px-[14px] py-[8px] border border-1 border-primary rounded-lg cursor-pointer"
          @click="() => router.push('/login')"
        >
          <LogOutIcon class="w-4 h-4" />
          <p class="text-sm">Đăng nhập</p>
        </div>
        <div
          class="flex items-center gap-3 text-ivory px-[14px] py-[8px] bg-primary rounded-lg cursor-pointer"
          @click="() => router.push('/register')"
        >
          <UserPlusIcon class="w-4 h-4" />
          <p class="text-sm">Đăng ký</p>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped></style>
