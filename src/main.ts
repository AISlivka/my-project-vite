import { createApp } from "vue"
import "@/assets/styles/index.css"
import App from "./App.vue"
import router from "@/router/routes/routes"
import { I18nLocale } from "@/assets/locales/I18nLocale.ts"
import { ru } from "@/assets/locales/ru"
import { en } from "@/assets/locales/en"

import { createI18n } from "vue-i18n"

const localeStorageLang = localStorage.getItem("lang")

export const i18n = createI18n<[I18nLocale], "ru" | "en">({
  legacy: false,
  fallbackLocale: "en",
  locale: localeStorageLang || "en",
  messages: {
    ru,
    en,
  },
})

createApp(App).use(i18n).use(router).mount("#app")
