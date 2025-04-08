<script setup lang="ts"></script>

<template>
  <div class="auth-layout min-h-screen">
    <div class="relative w-full h-full">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style="
          background-image: url('src/assets/images/background-3.jpg');
          background-position: -0.313px -396.286px;
          background-size: 100.043% 204.571%;
          background-color: lightgray;
        "
      ></div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-[#06372DA6]"></div>

      <!-- Centered Content -->
      <div
        class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-[#F9F4E8]"
      >
        <div
          class="p-10 border-2 border-white rounded-[40px] bg-[linear-gradient(159deg,rgba(255,255,255,0.4)_3.01%,rgba(255,255,255,0)_103.3%)] backdrop-blur-[21px]"
        >
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  --p-inputtext-border-color: var(--color-ivory);
  --p-inputtext-color: var(--color-ivory);
  --p-inputtext-background: transparent;
  --p-inputtext-focus-border-color: var(--color-ivory);
  --p-inputtext-hover-border-color: var(--color-ivory);
  --p-inputtext-placeholder-color: var(--color-ivory);
}

/* Fix Chrome autofill input */
.auth-layout input:-webkit-autofill,
.auth-layout input:-webkit-autofill:hover,
.auth-layout input:-webkit-autofill:focus,
.auth-layout input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
  -webkit-text-fill-color: inherit !important;
  background-color: transparent !important;
  color: inherit !important;
}
</style>
