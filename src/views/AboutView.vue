<script setup>
import MainLayout from './layouts/MainLayout.vue'
import { useLanguageStore } from '../stores/store.js'

const languageStore = useLanguageStore()
</script>

<template>
  <MainLayout>
    <div>{{ languageStore.lang.mainPage }}</div>
  </MainLayout>
</template>
