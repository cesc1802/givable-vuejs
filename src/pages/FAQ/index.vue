<template>
  <div class="faq p-12">
    <div
      class="flex justify-center items-center mb-8 text-primary font-semibold text-[30px]"
    >
      Câu hỏi thường gặp
    </div>
    <div class="grid grid-cols-2 gap-4 items-start">
      <!-- Lặp 4 khối FAQ -->
      <div
        class="faq-box border border-[#00715d] dark:border-ivory rounded-lg overflow-hidden flex flex-col"
        v-for="(faq, i) in faqs"
        :key="i"
      >
        <h3 class="faq-box-title text-2xl p-4 font-semibold text-heading">
          {{ faq.title }}
        </h3>

        <Accordion multiple>
          <AccordionPanel
            v-for="(item, j) in faq.questions"
            :key="j"
            :value="j.toString()"
          >
            <AccordionHeader>
              <p class="text-[18px] font-medium text-heading ml-[-16px]">
                {{ item.question }}
              </p>
            </AccordionHeader>
            <AccordionContent>
              <p class="m-0 text-sm text-heading ml-[-16px]">
                {{ item.answer }}
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

const faqs = ref([
  {
    title: "Về Givables",
    questions: [
      {
        question: "Givables là gì?",
        answer:
          "Givables là nền tảng kết nối những người muốn cho đi vật phẩm với những người đang cần. Chúng tôi tạo ra một môi trường an toàn và thuận tiện để mọi người có thể chia sẻ những vật phẩm không còn nhu cầu sử dụng đến những người thực sự cần.",
      },
      {
        question: "Tại sao nên sử dụng Givables?",
        answer:
          "Givables là nền tảng kết nối những người muốn cho đi vật phẩm với những người đang cần. Chúng tôi tạo ra một môi trường an toàn và thuận tiện để mọi người có thể chia sẻ những vật phẩm không còn nhu cầu sử dụng đến những người thực sự cần.",
      },
      {
        question: "Có tốn phí khi sử dụng Givables không?",
        answer: "Thông tin phí sử dụng Givables...",
      },
    ],
  },
  {
    title: "Quy trình sử dụng",
    questions: [
      {
        question: "Làm thế nào để đăng vật phẩm muốn cho?",
        answer: "Cách đăng vật phẩm...",
      },
      {
        question: "Làm sao để nhận vật phẩm?",
        answer: "Cách nhận vật phẩm...",
      },
      {
        question: "Làm sao để biết vật phẩm còn hay không?",
        answer: "Kiểm tra tình trạng vật phẩm...",
      },
    ],
  },
  {
    title: "Về Givables",
    questions: [
      { question: "Givables là gì?", answer: "Giải thích về Givables..." },
      {
        question: "Tại sao nên sử dụng Givables?",
        answer: "Lý do sử dụng Givables...",
      },
      {
        question: "Có tốn phí khi sử dụng Givables không?",
        answer: "Thông tin phí sử dụng Givables...",
      },
    ],
  },
  {
    title: "Quy trình sử dụng",
    questions: [
      {
        question: "Làm thế nào để đăng vật phẩm muốn cho?",
        answer: "Cách đăng vật phẩm...",
      },
      {
        question: "Làm sao để nhận vật phẩm?",
        answer: "Cách nhận vật phẩm...",
      },
      {
        question: "Làm sao để biết vật phẩm còn hay không?",
        answer: "Kiểm tra tình trạng vật phẩm...",
      },
    ],
  },
]);
</script>

<style scoped>
.faq-box {
  background-color: transparent;
  display: flex;
  flex-direction: column;

  --p-accordion-header-toggle-icon-color: var(--color-heading);
  --p-accordion-header-toggle-icon-hover-color: var(--color-heading);
  --p-accordion-header-toggle-icon-active-color: var(--color-heading);
  --p-accordion-header-toggle-icon-active-hover-color: var(--color-heading);
}
::v-deep(.p-accordion) {
  border: none;
  background-color: transparent !important;
  padding: 0 16px;
}

::v-deep(.p-accordionpanel) {
  background-color: transparent !important;
  border-bottom: 1px solid var(--color-primary);
  margin-bottom: 16px;
  overflow: hidden;
}

/* Header của AccordionPanel */
::v-deep(.p-accordion-header) {
  background-color: transparent;
  color: #00715d !important;
  font-weight: bold;
  padding: 12px;
  cursor: pointer;
}

::v-deep(.p-accordion-header-text) {
  color: #00715d !important;
}

::v-deep(.p-accordion-toggle-icon) {
  color: #00715d !important;
}

/* Nội dung Accordion */
::v-deep(.p-accordion-content) {
  background-color: transparent !important;
  border-top: 1px solid #00715d;
  padding: 12px;
  color: #333;
}

::v-deep(.p-accordionheader) {
  background-color: transparent !important;
}

::v-deep() {
  .p-accordioncontent-content {
    background-color: transparent !important;
  }
}
</style>
