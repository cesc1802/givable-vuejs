<script setup lang="ts">
import ClockIcon from "@assets/icons/clock.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import { CATEGORIES_OPTION, PRODUCT_ITEMS } from "@/constant/product";

const selectedCategory = ref("ALL");

const categories = ref([
  { name: "Tất cả danh mục", code: "ALL" },
  ...CATEGORIES_OPTION,
]);

const selectedCity = ref<string | undefined>();

const cities = ref([
  { name: "Hà Nội", code: "HN" },
  { name: "Hồ Chí Minh", code: "HCM" },
  { name: "Hải Phòng", code: "HP" },
  { name: "Đà Nẵng", code: "DN" },
  { name: "Vĩnh Phúc", code: "VP" },
  { name: "Phú Thọ", code: "PT" },
  { name: "Hòa Bình", code: "HB" },
  { name: "Bắc Ninh", code: "BN" },
  { name: "Nghệ An", code: "NA" },
  { name: "Lâm Đồng", code: "LD" },
]);

const selectedDistrict = ref();

const districtsByCity = ref<Record<string, { name: string; code: string }[]>>({
  HN: [
    { name: "Ba Đình", code: "HN-BADINH" },
    { name: "Cầu Giấy", code: "HN-CG" },
    { name: "Đống Đa", code: "HN-DD" },
    { name: "Hoàng Mai", code: "HN-HM" },
    { name: "Thanh Xuân", code: "HN-TX" },
  ],
  HCM: [
    { name: "Quận 1", code: "HCM-Q1" },
    { name: "Quận 3", code: "HCM-Q3" },
    { name: "Gò Vấp", code: "HCM-GV" },
    { name: "Tân Phú", code: "HCM-TP" },
    { name: "Bình Tân", code: "HCM-BT" },
  ],
  HP: [
    { name: "Hồng Bàng", code: "HP-HB" },
    { name: "Lê Chân", code: "HP-LC" },
    { name: "Ngô Quyền", code: "HP-NQ" },
    { name: "Kiến An", code: "HP-KA" },
  ],
  DN: [
    { name: "Hải Châu", code: "DN-HC" },
    { name: "Thanh Khê", code: "DN-TK" },
    { name: "Sơn Trà", code: "DN-ST" },
    { name: "Ngũ Hành Sơn", code: "DN-NHS" },
  ],
  VP: [
    { name: "Vĩnh Yên", code: "VP-VY" },
    { name: "Phúc Yên", code: "VP-PY" },
    { name: "Tam Dương", code: "VP-TD" },
    { name: "Tam Đảo", code: "VP-TDA" },
  ],
  PT: [
    { name: "Việt Trì", code: "PT-VT" },
    { name: "Phù Ninh", code: "PT-PN" },
    { name: "Thanh Ba", code: "PT-TB" },
    { name: "Lâm Thao", code: "PT-LT" },
  ],
  HB: [
    { name: "Hòa Bình", code: "HB-HB" },
    { name: "Lạc Sơn", code: "HB-LS" },
    { name: "Tân Lạc", code: "HB-TL" },
    { name: "Kim Bôi", code: "HB-KB" },
  ],
  BN: [
    { name: "TP Bắc Ninh", code: "BN-BN" },
    { name: "Yên Phong", code: "BN-YP" },
    { name: "Quế Võ", code: "BN-QV" },
    { name: "Thuận Thành", code: "BN-TT" },
  ],
  NA: [
    { name: "TP Vinh", code: "NA-TV" },
    { name: "Nghi Lộc", code: "NA-NL" },
    { name: "Hưng Nguyên", code: "NA-HN" },
    { name: "Cửa Lò", code: "NA-CL" },
  ],
  LD: [
    { name: "Đà Lạt", code: "LD-DL" },
    { name: "Bảo Lộc", code: "LD-BL" },
    { name: "Đơn Dương", code: "LD-DD" },
    { name: "Di Linh", code: "LD-DL2" },
  ],
});

const districtOptions = computed(() => {
  return districtsByCity.value[selectedCity.value!] || [];
});

const productList = ref(PRODUCT_ITEMS);

const filteredProducts = computed(() => {
  return productList.value.filter((product) => {
    const isMatchCategory =
      !selectedCategory.value ||
      product.category === selectedCategory.value ||
      selectedCategory.value === "ALL";
    const isMatchCity =
      !selectedCity.value || product.city === selectedCity.value;
    const isMatchDistrict =
      !selectedDistrict.value || product.district === selectedDistrict.value;

    return isMatchCategory && isMatchCity && isMatchDistrict;
  });
});
</script>

<template>
  <div class="relative h-[400px] w-full overflow-hidden">
    <img
      src="/src/assets/images/thumbnail-5.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover md:object-fill"
    />

    <div class="absolute inset-0 bg-[#06372DA6]"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
    >
      <h1 class="text-5xl font-bold mb-4">Tìm kiếm vật phẩm</h1>
      <p class="text-xl max-w-2xl mx-auto leading-relaxed">
        Nếu bạn đang cần hỗ trợ, đừng ngại! Chúng tôi ở đây để kết nối bạn với
        những món quà ý nghĩa từ cộng đồng.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 px-4 md:px-6 lg:px-8 py-10">
    <!-- BỘ LỌC -->
    <div class="lg:col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
        <div class="max-w-[256px] w-full">
          <div class="text-heading mb-2">Danh mục</div>
          <BSelect
            v-model="selectedCategory"
            class="w-5"
            :options="categories"
            optionLabel="name"
            optionValue="code"
            placeholder="Chọn danh mục"
            :disabled="false"
            show-clear
            :error="false"
          />
        </div>
        <div class="max-w-[256px] w-full">
          <div class="text-heading mb-2">Tỉnh / Thành phố</div>
          <BSelect
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            optionValue="code"
            :disabled="false"
            show-clear
            :error="false"
            placeholder="Tất cả tỉnh/thành phố"
          />
        </div>
        <div class="max-w-[256px] w-full">
          <div class="text-heading mb-2">Quận / Huyện</div>
          <BSelect
            v-model="selectedDistrict"
            :options="districtOptions"
            v-bind:disabled="!selectedCity"
            optionLabel="name"
            optionValue="code"
            show-clear
            :error="false"
            placeholder="Chọn Quận/Huyện"
          />
        </div>
      </div>
    </div>

    <!-- DANH SÁCH SẢN PHẨM -->
    <div class="lg:col-span-4">
      <div
        v-if="filteredProducts.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="(item, idx) in filteredProducts"
          :key="item.id"
          class="p-4 border rounded-lg border-primary"
        >
          <img
            :src="item.thumbnail"
            class="w-full aspect-[11/8] object-cover rounded-lg"
          />

          <div class="flex justify-between items-center mt-3">
            <p class="text-base font-medium">{{ item.title }}</p>
            <img :src="item.avatar" class="w-6 h-6 rounded-full" />
          </div>

          <div class="flex items-center gap-2 mt-4 text-sm text-[#535C6B]">
            <MapPinIcon class="w-5 h-5 text-[#0164E3]" />
            <span>{{ item.location }}</span>
          </div>

          <div class="flex items-center gap-2 mt-2 text-sm text-[#535C6B]">
            <ClockIcon class="w-5 h-5 text-[#107569]" />
            <span>{{ item.date }}</span>
          </div>
        </div>
      </div>
      <div
        v-else
        class="text-center text-gray-500 mt-6 flex justify-center items-center h-full"
      >
        Không có sản phẩm nào phù hợp với bộ lọc của bạn.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
