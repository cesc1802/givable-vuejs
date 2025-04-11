<script setup lang="ts">
import EyeIcon from "@/assets/icons/eye.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { Column, DataTable, useConfirm } from "primevue";
import ConfirmOverlayDialog from "@/components/Overlay/ConfirmOverlayDialog.vue";

const products = [
  {
    id: 1,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 2,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 3,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 4,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 5,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-5.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 6,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-6.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Archived",
  },
  {
    id: 7,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-7.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 8,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-10.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
  {
    id: 9,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-9.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Archived",
  },
  {
    id: 10,
    donor: "Olivia Rhye",
    title: "Lorem ipsum",
    image: "/src/assets/images/product-11.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Active",
  },
];

const confirm = useConfirm();

const requireConfirmation = () => {
  confirm.require({
    group: "delete_product",
    message: "Bạn có chắc chắn muốn xóa tài khoản này không ?",
    acceptLabel: "Xóa",
    rejectLabel: "Hủy",
    onShow: () => {
      console.log("onShow");
    },
  });
};
</script>

<template>
  <ConfirmOverlayDialog group="delete_product" />

  <div class="">
    <!-- Table content sẽ code sau -->
    <div class="card data-table">
      <DataTable
        :value="products"
        tableStyle="min-width: 50rem; border-collapse: collapse;"
      >
        <Column field="STT" header="STT">
          <template #body="slotProps">
            {{ slotProps.index + 1 }}
          </template>
        </Column>
        <Column field="donor" header="Người tặng"></Column>
        <Column>
          <template #body="slotProps">
            <img
              :src="slotProps.data.image"
              alt=""
              class="w-16 h-16 rounded-lg object-cover"
            />
          </template>
        </Column>
        <Column field="title" header="Tiêu đề"></Column>
        <Column field="description" header="Mô tả"></Column>
        <Column field="status" header="Trạng thái">
          <template #body="slotProps">
            <span
              v-if="slotProps.data.status === 'Active'"
              class="text-sm text-primary bg-[#ECFDF3] dark:bg-primary-100 rounded-2xl px-2 py-1"
            >
              <span
                class="w-2 h-2 rounded-[50%] inline-block bg-primary mr-1"
              ></span>
              {{ slotProps.data.status }}
            </span>
            <span
              v-else
              class="text-sm text-gray-700 bg-gray-100 rounded-2xl px-2 py-1"
            >
              <span
                class="w-2 h-2 rounded-[50%] inline-block bg-primary dark:bg-primary-100 mr-1"
              ></span>
              {{ slotProps.data.status }}
            </span>
          </template>
        </Column>
        <Column class="w-24 !text-end">
          <template #body="{ data }">
            <div class="flex items-center justify-end gap-2">
              <EyeIcon class="w-6 h-6 text-primary" />
              <TrashIcon
                class="w-6 h-6 text-primary ml-2 cursor-pointer"
                @click="requireConfirmation()"
              />
            </div>
          </template>
        </Column>
      </DataTable>
      <BPagination
        class="mt-6"
        :pagination="{
          per_page: 10,
          total: 187,
        }"
        :current-page="1"
      />
    </div>
  </div>
</template>

<style scoped>
.data-table {
  --p-datatable-header-cell-background: var(--color-ivory);

  --p-datatable-body-cell-border-color: var(--color-primary);
  --p-datatable-row-color: var(--color-primary);
  --p-datatable-header-cell-color: var(--color-primary);
  --p-datatable-header-cell-border-color: var(--color-primary);
}

.data-table .p-datatable {
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  border-spacing: 0;
  border-bottom: 0;
}

::v-deep(.data-table .p-datatable-table) {
  border-spacing: revert;
}

::v-deep(.data-table .p-datatable-header-cell) {
  font-weight: 600;
  background: none;
}
</style>
