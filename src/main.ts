// src/main.ts
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@router/index";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import ConfirmationService from "primevue/confirmationservice";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(ConfirmationService);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
