<script setup>
import Search from 'vue-material-design-icons/Magnify.vue'
import Shopping from 'vue-material-design-icons/Shopping.vue'
// import Earth from 'vue-material-design-icons/Earth.vue'
import User from 'vue-material-design-icons/Account.vue'
import light from 'vue-material-design-icons/WeatherSunny.vue'
import dark from 'vue-material-design-icons/WeatherNight.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import SideNav from './SideNav.vue'

import { onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguageStore } from '../../stores/store.js'
import { useDark, useToggle } from '@vueuse/core'
import en from '../../en'
import ar from '../../ar'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const languageStore = useLanguageStore()
const router = useRouter()
const selectedLanguage = ref('en') // Default language is English
const lang = ref(en)
const direction = ref('ltr')
const isScroll = ref(false)
let openSideNav = ref(false)

const currentRoute = ref(`/${router.currentRoute.value.path.slice(1)}`)

watchEffect(() => {
  const langPrefix = `/${router.currentRoute.value.params.lang}`
  if (router.currentRoute.value.path.startsWith(langPrefix)) {
    currentRoute.value = router.currentRoute.value.path.slice(langPrefix.length)
  } else {
    currentRoute.value = router.currentRoute.value.path
  }
})

function changeLanguage() {
  if (selectedLanguage.value === 'ar') {
    router.push(`/ar${currentRoute.value}`)
  } else {
    router.push(`/en${currentRoute.value}`)
  }
}

// This will update the selectedLanguage value based on the URL when the page loads
watch(
  () => router.currentRoute.value.params,
  (params) => {
    if (params.lang === 'ar') {
      selectedLanguage.value = 'ar'
      lang.value = ar
      direction.value = 'rtl'
      languageStore.changeLanguage('ar')
    } else {
      selectedLanguage.value = 'en'
      lang.value = en
      direction.value = 'ltr'
      languageStore.changeLanguage('en')
    }
  },
  { immediate: true }
)
const handleScroll = () => {
  isScroll.value = window.scrollY > 0
}
const upPage = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    id="navigation"
    :class="isScroll ? 'top-0' : 'lg:top-auto top-0'"
    class="fixed w-full h-[75px] py-3 border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] z-30"
  >
    <div class="items-center justify-between px-4 md:flex hidden">
      <div id="logo">
        <router-link to="/"
          ><img src="https://kemet.agartha.academy/static/images/logo.png" alt="" class="w-[115px]"
        /></router-link>
      </div>
      <div id="links" class="flex items-center gap-3">
        <ul class="flex gap-2 lg:gap-4">
          <li class="cursor-pointer hover:text-[#fea555]">
            <router-link :to="`/${selectedLanguage}`">{{ lang.header['home'] }}</router-link>
          </li>
          <li class="cursor-pointer hover:text-[#fea555]">{{ lang.header['courses'] }}</li>
          <li class="cursor-pointer hover:text-[#fea555]">{{ lang.header['events'] }}</li>
          <router-link :to="`/${selectedLanguage}/library/maps`">
            <li class="cursor-pointer hover:text-[#fea555]">{{ lang.header['library'] }}</li>
          </router-link>
          <li class="cursor-pointer hover:text-[#fea555]">{{ lang.header['article'] }}</li>
          <li class="cursor-pointer hover:text-[#fea555]">{{ lang.header['mentor'] }}</li>
          <li class="cursor-pointer hover:text-[#fea555]">{{ lang.header['service'] }}</li>
        </ul>
        <div id="icons" class="items-center gap-3 md:flex hidden">
          <Search :size="22" class="cursor-pointer hover:text-[#fea555]" />
          <Shopping :size="22" class="cursor-pointer hover:text-[#fea555]" />

          <select
            class="relative text-center mb-10 dark:bg-[#1a1a1a] dark:text-white top-5 ring-0 focus:ring-0 focus:border-none focus:outline-none"
            v-model="selectedLanguage"
            @change="changeLanguage"
          >
            <option value="ar" :selected="selectedLanguage === 'ar'">{{ lang.lang['ar'] }}</option>
            <option value="en" :selected="selectedLanguage === 'en'">{{ lang.lang['en'] }}</option>
          </select>

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
      <div id="join" class="lg:block hidden">
        <router-link
          to="/login"
          class="py-3 px-4 bg-[#fae555] rounded-lg hover:bg-[#f5df4f] font-bold"
          >{{ lang.header['joinUs'] }}</router-link
        >
      </div>
    </div>
    <div class="flex items-center justify-between px-4 md:hidden">
      <div id="logo">
        <router-link to="/"
          ><img src="https://kemet.agartha.academy/static/images/logo.png" alt="" class="w-[100px]"
        /></router-link>
      </div>

      <div id="join" class="">
        <router-link
          to="/login"
          class="py-1 px-2 bg-[#fae555] rounded-lg hover:bg-[#f5df4f] font-bold"
          >{{ lang.header['joinUs'] }}</router-link
        >
      </div>

      <div id="icons" class="items-center gap-3 flex">
        <select
          class="relative text-center mb-10 dark:bg-[#1a1a1a] dark:text-white top-5 ring-0 focus:ring-0 focus:border-none focus:outline-none"
          v-model="selectedLanguage"
          @change="changeLanguage"
        >
          <option value="ar" :selected="selectedLanguage === 'ar'">{{ lang.lang['ar'] }}</option>
          <option value="en" :selected="selectedLanguage === 'en'">{{ lang.lang['en'] }}</option>
        </select>
        <Menu @click="openSideNav = true" :size="27" class="cursor-pointer" />
      </div>
    </div>
  </div>

  <SideNav v-if="openSideNav" @closeSideNav="openSideNav = false" />

  <div
    @click="upPage"
    v-if="isScroll"
    class="bg-black fixed z-30 bottom-5 rounded-xl left-4 cursor-pointer hover:bg-slate-600"
  >
    <ChevronUp fillColor="#fff" :size="50" />
  </div>
</template>

<style scoped>
li {
  text-transform: uppercase;
}
.router-link-active {
  color: #fae555;
}
</style>
