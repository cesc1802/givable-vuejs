<script setup lang="ts">
import { Form } from "@primevue/forms";
import UploadIcon from "@/assets/icons/upload.svg";
import { CATEGORIES_OPTION } from "@/constant/product";

const searchValue = ref<string>("");

const steps = [
  {
    title: "Đăng vật phẩm",
    desc: "Đăng thông tin và hình ảnh vật phẩm bạn muốn chia sẻ.",
  },
  {
    title: "Xem xét yêu cầu",
    desc: "Kiểm tra danh sách người yêu cầu và chọn người nhận phù hợp trong mục “Quản lý”.",
  },
  {
    title: "Liên hệ và trao đổi",
    desc: "Sau khi chấp nhận, số điện thoại sẽ được chia sẻ để 2 bên liên lạc.",
  },
  {
    title: "Xác nhận khi hoàn tất",
    desc: "Xác nhận khi trao vật phẩm thành công.",
  },
];

const initialValues = ref({
  title: "",
  descriptions: "",
  category: null,
  location: "",
  images: [],
});
</script>

<template>
  <div class="relative h-[400px] w-full overflow-hidden">
    <img
      src="/src/assets/images/thumbnail-6.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover md:object-fill"
    />

    <div class="absolute inset-0 bg-[#06372DA6]"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
    >
      <h1 class="text-5xl font-bold mb-4">Chia sẻ vật phẩm</h1>
      <p class="text-xl max-w-2xl mx-auto leading-relaxed">
        "Hãy cùng chung tay lan tỏa yêu thương – Tìm kiếm và trao gửi vật phẩm
        từ thiện đến những hoàn cảnh cần giúp đỡ"
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 py-6">
    <!-- Left: Form -->
    <div class="lg:col-span-2">
      <Form v-slot="$form" :initialValues="initialValues">
        <div class="space-y-4">
          <div>
            <div class="mb-1 font-medium">Tiêu đề</div>
            <BInput
              v-model="initialValues.title"
              name="title"
              class="w-full"
              placeholder="Bạn muốn chia sẻ vật phẩm gì ?"
              type="text"
              :error="false"
            />
          </div>

          <div>
            <div class="mb-1 font-medium">Mô tả</div>
            <BTextarea
              v-model="initialValues.descriptions"
              name="descriptions"
              class="w-full"
              placeholder="Mô tả vật phẩm của bạn"
              :error="false"
            />
          </div>

          <div>
            <div class="mb-1 font-medium">Phân loại</div>
            <BSelect
              v-model="initialValues.category"
              name="category"
              class="w-full"
              :options="CATEGORIES_OPTION"
              optionLabel="name"
              optionValue="code"
              placeholder="Chọn phân loại vật phẩm"
              :error="false"
            />
          </div>

          <div>
            <div class="mb-1 font-medium">Địa điểm</div>
            <BInput
              v-model="searchValue"
              class="w-full"
              placeholder="Nhập địa điểm của bạn"
              type="text"
              :error="false"
            />
          </div>

          <div>
            <div class="mb-2 font-medium">Hình ảnh</div>
            <div
              class="h-[200px] w-[200px] flex justify-center items-center border-dashed border-[1px] border-primary cursor-pointer bg-transparent"
            >
              <div class="w-16 h-16 p-[15px] rounded-full bg-primary border">
                <UploadIcon class="w-8 h-8 text-ivory" />
              </div>
            </div>
          </div>

          <div>
            <button
              class="flex items-center justify-center w-[82px] h-[40px] gap-3 bg-primary text-white rounded-[8px] hover:bg-primary transition cursor-pointer"
            >
              Chia sẻ
            </button>
          </div>
        </div>
      </Form>
    </div>

    <!-- Right: Statistics -->
    <div
      class="lg:col-span-1 flex flex-col items-center justify-start mb-8 mt-[-24px]"
    >
      <div>
        <h2
          class="text-[120px] md:text-[120px] font-extrabold bg-[url('/src/assets/images/background-1.jpg')] bg-cover bg-center text-transparent bg-clip-text"
        >
          1.234
        </h2>
        <p class="text-2xl text-heading text-center">Vật phẩm được chia sẻ</p>
      </div>

      <div class="p-6">
        <h3 class="text-2xl font-semibold text-heading mb-4">
          Hướng dẫn nhanh
        </h3>
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex gap-4 relative pb-10 last:pb-0 mt-5"
        >
          <div class="relative z-10">
            <div
              class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold"
            >
              {{ index + 1 }}
            </div>

            <div
              v-if="index < steps.length - 1"
              class="absolute left-1/2 top-6 h-full w-px border-l border-dashed border-primary translate-x-[-50%]"
            />
          </div>

          <div class="max-w-[366px]">
            <h4 class="font-semibold text-base text-heading">
              {{ step.title }}
            </h4>
            <p class="text-sm text-[#535C6B] mt-1 leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
