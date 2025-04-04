<script setup lang="ts">
import UploadIcon from "@/assets/icons/upload.svg";
import { CATEGORIES_OPTION } from "@/constant/product";

const searchValue = ref<string>("");

const initialValues = ref({
  title: "",
  descriptions: "",
  category: null,
  location: "",
  images: [],
});
</script>

<template>
  <div class="share-page">
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

        <QuickGuide class="p-6" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.share-page {
  --p-inputtext-border-color: var(--color-primary);
  --p-inputtext-background: transparent;
  --p-inputtext-border-color: var(--color-primary);
  --p-inputtext-focus-border-color: var(--color-primary);
  --p-inputtext-hover-border-color: var(--color-primary);
  --p-inputtext-placeholder-color: var(--color-gray);
}
</style>
