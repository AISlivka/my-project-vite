<template>
  <h1>
    {{ $t("title") }}
  </h1>
  <button @click="switchLang">{{ $t("switchLang") }}</button>
  <div class="image">
    <iconCloseBold />
  </div>
  <div>тестовая SVG</div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { locale } = useI18n({ useScope: "global" })
import iconCloseBold from "@/assets/icons/iconCloseBold.svg"

const switchLang = () => {
  locale.value === "en" ? (locale.value = "ru") : (locale.value = "en")
  localStorage.setItem("lang", locale.value)
}
</script>

<style>
.image {
  color: black;
  fill: black;
}
</style>
