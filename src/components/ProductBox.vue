<script setup lang="ts">
import ClockIcon from "@assets/icons/clock.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";

defineProps<{
  item: {
    id: string | number;
    thumbnail: string;
    title: string;
    avatar: string;
    location: string;
    date: string;
  };
}>();
</script>

<template>
  <div
    class="p-4 border rounded-lg border-primary cursor-pointer"
    @click="$router.push(`/search/${item.id}`)"
  >
    <img
      :src="item.thumbnail"
      class="w-full aspect-[11/8] object-cover rounded-lg"
    />

    <div class="flex justify-between items-center mt-3">
      <p class="text-base font-medium text-heading">{{ item.title }}</p>
      <img :src="item.avatar" class="w-6 h-6 rounded-full" />
    </div>

    <div class="flex items-center gap-2 mt-4 text-sm text-gray dark:text-ivory">
      <MapPinIcon class="w-5 h-5 text-[#0164E3]" />
      <span>{{ item.location }}</span>
    </div>

    <div class="flex items-center gap-2 mt-2 text-sm text-gray dark:text-ivory">
      <ClockIcon class="w-5 h-5 text-[#107569]" />
      <span>{{ item.date }}</span>
    </div>
  </div>
</template>

<style scoped></style>
