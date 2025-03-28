<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-[24px]">
      <router-link to="/" class="flex items-center gap-[8px] cursor-pointer" @click="() => router.push('/')">
        <HeartIcon class="text-[#00715D] w-8 h-8" />
        <span class="text-[#00715D] font-bold text-[24px]">Givables</span>
      </router-link>
      <ul class="flex items-center ">
        <li
          v-for="(item, idx) in menuItems"
          :key="idx"
          class="flex items-center gap-[8px] text-[14px] p-[10px] hover:text-[#00715D] cursor-pointer"
          :class="[isPathActive(item.link)]"
          @click="handleDirectPage(item)"
        >
          <component :is="item.icon" class="w-5 h-5" />
         <span> {{ item.label }}</span>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-[20px]">
      <button class="border-[#535C6B] w-9 h-9 border-1 rounded-lg justify-center flex items-center cursor-pointer">
        <SunIcon class="w-4 h-4" />
      </button>
      <div class="flex items-center gap-2">
        <img src="@assets/images/avatar.png" class="inline" />
        <span class="text-[14px] text-[#00715D]">Giselle</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@store/user";
import { ENV_CONFIG } from "@utils/config";
import HeartIcon from "@assets/icons/heart.svg";
import SearchIcon from "@assets/icons/search.svg";
import GiftIcon from "@assets/icons/gift.svg";
import AlertIcon from "@assets/icons/alert-octagon.svg";
import SunIcon from "@assets/icons/sun.svg";
import MessageQuestionIcon from "@assets/icons/message-question.svg";
import Button from 'primevue/button';
import { ref } from "vue"
import "./styles.css";
import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();
console.log("ENV_CONFIG", ENV_CONFIG, userStore.userInfo);

const menuItems = ref([
  {
    label: "Tìm kiếm",
    icon: SearchIcon,
    link: '/search',
  },
  {
    label: "Chia sẻ",
    icon: GiftIcon,
    link: '/share',
  },
  {
    label: "Giới thiệu",
    icon: AlertIcon,
    link: '/about',
  },
  {
    label: "FAQ",
    icon: MessageQuestionIcon,
    link: '/faq',
  },
])

const router = useRouter()

const route = useRoute()

const isPathActive  = (path: string) => {
  return [path === route.path ? 'text-[#00715D]' : 'text-[#535C6B]']
}
const handleDirectPage = (item: any) => {
  router.push(item.link)
}
</script>
