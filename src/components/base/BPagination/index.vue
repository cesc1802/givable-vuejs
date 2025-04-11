<script setup lang="ts">
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";
interface PaginationProps {
  currentPage: number;
  pagination: {
    per_page: number;
    total: number;
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
const totalPages = computed(() => {
  return Math.ceil(total.value / perPage.value);
});

watch(
  () => props.pagination,
  (newPagination) => {
    perPage.value = newPagination.per_page || 10;
    total.value = newPagination.total || 0;
  },
  { immediate: true }
);

watch(perPage, (newPerPage) => {
  emit("pagesizechanged", newPerPage);
});

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
    if (i == 0) continue;
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
const gotoPrevious = () => {
  if (isInFirstPage.value) return;
  gotoPageNumber(props.currentPage - 1);
};
const gotoNext = () => {
  if (isInLastPage.value) return;
  gotoPageNumber(props.currentPage + 1);
};

const isActivePage = (page: number) => {
  return page === props.currentPage
    ? "bg-primary text-white dark:text-primary-500"
    : "text-primary";
};
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
        <div
          class="pagination-button cursor-pointer text-primary hover:text-white"
          @click="gotoPrevious"
        >
          <ChevronLeftIcon class="w-4 h-4" />
        </div>
      </li>

      <!-- Left dots -->
      <template v-if="showDots('left')">
        <li>
          <button
            class="pagination-button dark:text-ivory"
            @click="gotoPageNumber(1)"
          >
            1
          </button>
        </li>
        <li>
          <button class="pagination-button dark:text-ivory" disabled>
            ...
          </button>
        </li>
      </template>

      <!-- Pages -->
      <li v-for="page in pages" :key="page">
        <button
          class="pagination-button"
          :class="isActivePage(page)"
          @click="gotoPageNumber(page)"
        >
          {{ page }}
        </button>
      </li>

      <!-- Right dots -->
      <template v-if="showDots('right')">
        <li>
          <button class="pagination-button dark:text-ivory" disabled>
            ...
          </button>
        </li>
        <li>
          <button
            class="pagination-button cursor-pointer dark:text-ivory"
            @click="gotoPageNumber(totalPages)"
          >
            {{ totalPages }}
          </button>
        </li>
      </template>

      <!-- Next -->
      <li>
        <div
          class="pagination-button text-primary hover:text-white cursor-pointer"
          @click="gotoNext"
        >
          <ChevronRightIcon class="w-4 h-4" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination-button {
  @apply w-10 h-10 border  border-primary rounded-lg flex items-center justify-center text-sm hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed;
}

.dark .pagination-button {
  @apply hover:text-primary-500;
}
</style>
