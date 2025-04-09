<script setup lang="ts">
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";
interface PaginationProps {
  currentPage: number;
  pagination: {
    per_page: number;
    total: number;
    total_pages: number;
  };
  maxVisibleButtons?: number;
}

const props = defineProps<PaginationProps>();
const emit = defineEmits<{
  (e: "pagechanged", page: number): void;
  (e: "pagesizechanged", size: number): void;
}>();

const perPageOptions = [10, 20, 30, 50, 100];
const perPageOptionsMap = perPageOptions.map((option) => ({
  name: option.toString(),
  code: option,
}));

const perPage = ref(props.pagination.per_page || 10);
const total = ref(props.pagination.total || 0);
const totalPages = ref(props.pagination.total_pages || 0);

watch(
  () => props.pagination,
  (newPagination) => {
    perPage.value = newPagination.per_page || 10;
    total.value = newPagination.total || 0;
    totalPages.value = newPagination.total_pages || 0;
  },
  { immediate: true }
);

const isInFirstPage = computed(() => props.currentPage === 1);
const isInLastPage = computed(() => props.currentPage === totalPages.value);

const startPage = computed(() => {
  if (props.currentPage === 1) return 1;
  if (props.currentPage === totalPages.value)
    return totalPages.value - visibleButtons.value + 1;
  return props.currentPage - 1;
});

const visibleButtons = computed(() => props.maxVisibleButtons || 5);

const endPage = computed(() => {
  return Math.min(startPage.value + visibleButtons.value - 1, totalPages.value);
});

const pages = computed(() => {
  const range = [];
  for (let i = startPage.value; i <= endPage.value; i++) {
    range.push(i);
  }
  return range;
});

const showDots = (position: "left" | "right") => {
  const number = position === "left" ? 1 : totalPages.value;
  const nextNumber = position === "left" ? 2 : totalPages.value - 1;
  return !pages.value.includes(number) || !pages.value.includes(nextNumber);
};

const gotoPageNumber = (page: number) => {
  emit("pagechanged", page);
};

const gotoFirst = () => gotoPageNumber(1);
const gotoLast = () => gotoPageNumber(totalPages.value);
const gotoPrevious = () => gotoPageNumber(props.currentPage - 1);
const gotoNext = () => gotoPageNumber(props.currentPage + 1);
</script>

<template>
  <div class="flex justify-between w-full items-center">
    <!-- Dropdown chọn số lượng bản ghi -->
    <div class="flex items-center gap-2">
      <span class="text-primary font-medium text-sm">Xem</span>
      <BSelect
        v-model="perPage"
        :options="perPageOptionsMap"
        option-label="name"
        option-value="code"
      />
    </div>

    <!-- Pagination nút -->
    <ul v-if="totalPages > 1" class="flex list-none rounded my-2 gap-2">
      <!-- Previous -->
      <li>
        <div class="pagination-button">
          <ChevronLeftIcon class="w-4 h-4 text-primary" @click="gotoPrevious" />
        </div>
      </li>

      <!-- Left dots -->
      <template v-if="showDots('left')">
        <li>
          <button class="pagination-button" @click="gotoPageNumber(1)">
            1
          </button>
        </li>
        <li>
          <button class="pagination-button" disabled>...</button>
        </li>
      </template>

      <!-- Pages -->
      <li v-for="page in pages" :key="page">
        <button
          class="pagination-button"
          :class="{ active: page === props.currentPage }"
          @click="gotoPageNumber(page)"
        >
          {{ page }}
        </button>
      </li>

      <!-- Right dots -->
      <template v-if="showDots('right')">
        <li>
          <button class="pagination-button" disabled>...</button>
        </li>
        <li>
          <button class="pagination-button" @click="gotoPageNumber(totalPages)">
            {{ totalPages }}
          </button>
        </li>
      </template>

      <!-- Next -->
      <li>
        <div class="pagination-button">
          <ChevronRightIcon class="w-4 h-4 text-primary" @click="gotoNext" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination-button {
  @apply w-10 h-10 border text-primary border-primary rounded-lg flex items-center justify-center text-sm hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed;
}
.pagination-button.active {
  @apply bg-primary text-white;
}
</style>
