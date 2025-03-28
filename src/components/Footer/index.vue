<template>
    <footer class="bg-[#07342F] text-white py-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
          <!-- Cột Logo + Giới thiệu -->
          <div class="w-full max-w-xs">
            <ul>
              <li class="mb-3 flex items-center gap-2">
                <HeartIcon class="text-white w-8 h-8" />
                <span class="font-bold text-2xl">Givables</span>
              </li>
              <li class="text-[#FCFCFD]">
                Kết nối cộng đồng thông qua sự sẻ chia và quan tâm.
              </li>
            </ul>
          </div>
  
          <!-- Các cột links -->
          <div v-for="(list, idx) in footerLinkItems" :key="idx">
            <ul>
              <li class="mb-4 text-lg font-semibold">{{ list.label }}</li>
              <li
                v-for="(item, idx) in list.links"
                :key="item.link"
                class="mb-3 text-[#FCFCFD] hover:text-white transition"
              >
                <a :href="item.link">{{ item.label }}</a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Divider -->
        <div class="border-t border-gray-600 my-6"></div>
  
        <!-- Bản quyền -->
        <div class="text-center text-[#FCFCFD] text-sm">
          ©2025 Givables. Đã đăng ký bản quyền.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import HeartIcon from "@assets/icons/heart.svg";
  
  const footerLinkItems = ref([
    {
      label: "Truy cập nhanh",
      links: [
        { label: "Giới thiệu", link: "/gioi-thieu" },
        { label: "Liên hệ", link: "/lien-he" },
        { label: "Câu hỏi thường gặp", link: "/faq" },
      ],
    },
    {
      label: "Pháp lý",
      links: [
        { label: "Chính sách bảo mật", link: "/chinh-sach-bao-mat" },
        { label: "Điều khoản sử dụng", link: "/dieu-khoan" },
        { label: "Chính sách cookie", link: "/cookie" },
      ],
    },
    {
      label: "Kết nối",
      links: [
        { label: "Facebook", link: "https://facebook.com" },
        { label: "Twitter", link: "https://twitter.com" },
        { label: "Instagram", link: "https://instagram.com" },
      ],
    },
  ]);
  </script>
  