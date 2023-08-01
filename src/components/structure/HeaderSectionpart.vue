<script setup>
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue'
import FaceAgent from 'vue-material-design-icons/FaceAgent.vue'
import { useLanguageStore } from '../../stores/store.js'

const languageStore = useLanguageStore()
</script>

<template>
  <div
    id="header"
    class="w-full h-[63px] bg-[#07294d] dark:bg-gray-900 py-2 text-white lg:block hidden"
  >
    <div class="flex items-center justify-between container mx-auto">
      <div class="flex items-center gap-3">
        <EmailOutline :size="30" fillColor="#fae555" />
        <p>info@agartha.academy</p>
      </div>
      <div>⏳ Soon The Personal pyramid course ⏳</div>
      <div class="flex items-center gap-3">
        <FaceAgent :size="30" fillColor="#fae555" />
        <div>
          <p>{{ languageStore.lang.header['callUs'] }}</p>
          <span class="text-[#fae555]">00201011609810</span>
        </div>
      </div>
    </div>
  </div>
</template>
