<script setup>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import CloseBox from 'vue-material-design-icons/CloseBox.vue'
import Search from 'vue-material-design-icons/Magnify.vue'
import Shopping from 'vue-material-design-icons/Shopping.vue'
// import Earth from 'vue-material-design-icons/Earth.vue'
import User from 'vue-material-design-icons/Account.vue'
import light from 'vue-material-design-icons/WeatherSunny.vue'
import dark from 'vue-material-design-icons/WeatherNight.vue'

import { useLanguageStore } from '../../stores/store.js'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const languageStore = useLanguageStore()

const emit = defineEmits(['closeSideNav'])
</script>

<template>
  <div id="overlay" class="fixed top-0 right-0 w-full h-full z-40 bg-black opacity-60"></div>
  <div>
    <CloseBox
      class="fixed top-0 right-[280px] cursor-pointer z-50"
      :size="40"
      @click="emit('closeSideNav')"
    />
    <div
      :dir="languageStore.direction"
      class="fixed top-0 right-0 bg-white dark:bg-[#0e0b0b] dark:text-white z-50 w-[280px] h-full text-right"
    >
      <ul class="">
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            <router-link to="/ar">{{ languageStore.lang.header['home'] }}</router-link>
          </li>
        </div>
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['courses'] }}
          </li>
        </div>
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['events'] }}
          </li>
        </div>
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['library'] }}
          </li>
        </div>
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['article'] }}
          </li>
        </div>
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['mentor'] }}
          </li>
        </div>
        <div id="link" class="flex items-center justify-between hover:text-orange-300">
          <ChevronLeft />
          <li class="cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['service'] }}
          </li>
        </div>
      </ul>

      <div id="icons" class="items-center gap-3 flex justify-center mt-4">
        <Search :size="22" class="cursor-pointer hover:text-[#fea555]" />
        <Shopping :size="22" class="cursor-pointer hover:text-[#fea555]" />

        <User :size="22" class="cursor-pointer hover:text-[#fea555]" />
        <dark
          v-if="!isDark"
          @click="toggleDark()"
          :size="22"
          class="cursor-pointer hover:text-[#fea555]"
        />
        <light
          v-if="isDark"
          @click="toggleDark()"
          :size="22"
          class="cursor-pointer hover:text-[#fea555]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#link {
  padding: 10px 15px;
  border-bottom: 1px solid rgba(243, 237, 237, 0.1);
  cursor: pointer;
  position: relative;
}
#link::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0%;
  background-color: #ddd;
  opacity: 0.15;
  z-index: -1;
  transition: 0.5s ease-in-out;
}
#link:hover:before {
  width: 100%;
}
</style>
