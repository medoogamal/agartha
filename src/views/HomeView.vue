<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguageStore } from '../stores/store.js'
import MainLayout from './layouts/MainLayout.vue'
import PageBanner from '../components/parts/PageBanner.vue'

const languageStore = useLanguageStore()
const router = useRouter()

// This will update the selectedLanguage value based on the URL when the page loads
watch(
  () => router.currentRoute.value.params,
  (params) => {
    if (params.lang === 'ar') {
      languageStore.changeLanguage('ar')
    } else {
      languageStore.changeLanguage('en')
    }
  },
  { immediate: true }
)
</script>

<template>
  <MainLayout>
    <main class="dark:text-white bg-gray-50 dark:bg-transparent">
      <PageBanner
        image="/images/slider-image-3.jpg"
        :name="languageStore.lang['home']"
        :parentName="languageStore.lang['home']"
        parentPath="library"
        class="mb-[200px]"
      /></main
  ></MainLayout>
</template>
