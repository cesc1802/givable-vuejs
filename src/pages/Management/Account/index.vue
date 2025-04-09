<script setup lang="ts">
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { Column, DataTable, useConfirm } from "primevue";
import ConfirmOverlayDialog from "@/components/Overlay/ConfirmOverlayDialog.vue";

const accounts = ref([
  {
    name: "Olivia Rhye",
    age: 25,
    email: "olivia@Google.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Giselle",
    age: 26,
    email: "elopez@yahoo.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Albert",
    age: 27,
    email: "olivia@Google.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Chiyo",
    age: 28,
    email: "elopez@yahoo.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Matthew",
    age: 29,
    email: "olivia@Google.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Elizabeth Hall",
    age: 30,
    email: "elopez@yahoo.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Archived",
  },
  {
    name: "Olivia Rhye",
    age: 31,
    email: "olivia@Google.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Martinez",
    age: 32,
    email: "olivia@Google.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
  {
    name: "Sirius",
    age: 30,
    email: "elopez@yahoo.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Archived",
  },
  {
    name: "Olivia Rhye",
    age: 34,
    email: "olivia@Google.com",
    phone: "0123456789",
    createdAt: "15:45 10/12/2024",
    status: "Active",
  },
]);

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

const currentPage = ref(1);
const perPage = ref(50);
const total = ref(187);

const onPageChange = (page: number) => {
  currentPage.value = page;
};

const onPageSizeChange = (size: number) => {
  perPage.value = size;
  currentPage.value = 1;
};
</script>

<template>
  <ConfirmOverlayDialog group="delete_product" />

  <div class="">
    <!-- Table content sẽ code sau -->
    <div class="card data-table">
      <DataTable
        :value="accounts"
        tableStyle="min-width: 50rem; border-collapse: collapse;"
      >
        <Column field="STT" header="STT">
          <template #body="slotProps">
            {{ slotProps.index + 1 }}
          </template>
        </Column>
        <Column field="name" header="Tên"></Column>
        <Column field="age" header="Tuổi"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Số điện thoại"></Column>
        <Column field="createdAt" header="Ngày tạo"></Column>
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
              <EditIcon class="w-6 h-6 text-primary" />
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
          per_page: perPage,
          total: total,
        }"
        :current-page="currentPage"
        @pagechanged="onPageChange"
        @pagesizechanged="onPageSizeChange"
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
