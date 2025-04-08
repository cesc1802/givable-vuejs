<script setup lang="ts">
import BookmarkIcon from "@/assets/icons/bookmark.svg";
import UserIcon from "@/assets/icons/user.svg";

const route = useRoute();
const menuSidebar = [
  {
    title: "Quản lý tài khoản",
    icon: UserIcon,
    path: "/management/account-management",
  },
  {
    title: "Quản lý vật phẩm",
    icon: BookmarkIcon,
    path: "/management/product-management",
  },
];

const isPathActive = (path: string) => {
  return route.path.match(path)
    ? "bg-primary text-ivory"
    : "hover:text-primary text-primary";
};
</script>
<template>
  <!-- Sidebar -->
  <aside
    class="w-64 bg-ivory p-4 flex flex-col gap-4 border-r border-[#F0E4C7]"
  >
    <h1 class="text-xl font-bold py-[10px] px-2">Menu</h1>
    <ul class="flex flex-col gap-3">
      <li
        v-for="(item, index) in menuSidebar"
        :key="index"
        class="flex items-center gap-2 cursor-pointer py-[10px] px-2 rounded-lg"
        :class="[isPathActive(item.path)]"
        @click="() => $router.push(item.path)"
      >
        <component :is="item.icon" class="w-6 h-6" /> {{ item.title }}
      </li>
    </ul>
  </aside>
</template>

<style scoped></style>
