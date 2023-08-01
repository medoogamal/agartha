<script setup>
import Facebook from 'vue-material-design-icons/Facebook.vue'
import instagram from 'vue-material-design-icons/Instagram.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import LinkedIn from 'vue-material-design-icons/Linkedin.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDownCircleOutline.vue'

import { useLanguageStore } from '../../stores/store.js'
import { ref } from 'vue'

const languageStore = useLanguageStore()

let openSitemap = ref(false)
let openInfo = ref(false)
let openSupport = ref(false)
</script>

<template>
  <!-- footer -->
  <div
    id="footer"
    class="block bottom-0 w-full bg-gray-100 border-t border-t-gray-200 mt-4 dark:bg-[#0c0c0c] dark:border-t-[#000]"
  >
    <!-- on big screen -->
    <div class="mx-auto container py-6 px-4">
      <div>
        <div class="flex md:flex-row flex-col md:items-center justify-between mt-4 mb-10">
          <div id="about" class="mb-8">
            <img
              src="https://kemet.agartha.academy/static/images/logo.png"
              class="w-[250px] mb-3 ml-10 md:ml-0"
              alt=""
            />
            <p class="mb-3 text-sm">
              {{ languageStore.lang.footer['message1'] }}<br />
              {{ languageStore.lang.footer['message2'] }} <br />
              {{ languageStore.lang.footer['message3'] }} <br />
              {{ languageStore.lang.footer['message4'] }}
            </p>
            <span class="block text-xs"
              ><b>{{ languageStore.lang.header['callUs'] }}: </b> 00201011609810</span
            >
            <span class="block text-xs"
              ><b>{{ languageStore.lang.header['email'] }}:</b> info@agartha.academy</span
            >
            <div id="social" class="flex gap-3 mt-6">
              <Facebook fillColor="blue" :size="26" />
              <Twitter fillColor="violet" :size="26" />
              <LinkedIn fillColor="#4300a2" :size="26" />
              <instagram fillColor="#ff000" :size="26" />
            </div>
          </div>

          <div id="Sitemap" class="md:block hidden">
            <ul>
              <h3 class="font-extrabold text-lg -mt-5">
                {{ languageStore.lang.footer['sitemap'] }}
              </h3>
              <li>{{ languageStore.lang.footer['aboutUs'] }}</li>
              <li>{{ languageStore.lang.footer['teachers'] }}</li>
              <li>{{ languageStore.lang.footer['contact'] }}</li>
            </ul>
          </div>
          <div id="Our Products" class="md:block hidden">
            <ul>
              <h3 class="font-extrabold text-lg">{{ languageStore.lang.footer['ourProducts'] }}</h3>
              <li>{{ languageStore.lang.footer['courses'] }}</li>
              <li>{{ languageStore.lang.footer['mentor'] }}</li>
              <li>{{ languageStore.lang.footer['articles'] }}</li>
              <li>{{ languageStore.lang.footer['events'] }}</li>
            </ul>
          </div>
          <div id="Support" class="md:block hidden">
            <ul>
              <h3 class="font-extrabold text-lg">{{ languageStore.lang.footer['support'] }}</h3>
              <li>{{ languageStore.lang.footer['policy'] }}</li>
              <li>{{ languageStore.lang.footer['mentor'] }}</li>
              <li>{{ languageStore.lang.footer['support'] }}</li>
              <li>{{ languageStore.lang.footer['faqs'] }}</li>
            </ul>
          </div>
          <div id="Sitemap" class="md:hidden block mb-4">
            <div
              class="flex justify-between cursor-pointer border-b border-b-gray-200 pb-3 mb-2"
              @click="openSitemap = !openSitemap"
            >
              <h3 class="font-extrabold text-lg">{{ languageStore.lang.footer['sitemap'] }}</h3>
              <ChevronDown
                :class="openSitemap ? 'rotate-180' : 'rotate-0'"
                class="transition-all duration-300"
              />
            </div>
            <ul v-if="openSitemap" class="flex flex-col gap-3">
              <li>{{ languageStore.lang.footer['aboutUs'] }}</li>
              <li>{{ languageStore.lang.footer['teachers'] }}</li>
              <li>{{ languageStore.lang.footer['contact'] }}</li>
            </ul>
          </div>
          <div id="Our Products" class="md:hidden block mb-5">
            <div
              class="flex justify-between cursor-pointer border-b border-b-gray-200 pb-3 mb-2"
              @click="openInfo = !openInfo"
            >
              <h3 class="font-extrabold text-lg">{{ languageStore.lang.footer['ourProducts'] }}</h3>
              <ChevronDown
                :class="openInfo ? 'rotate-180' : 'rotate-0'"
                class="transition-all duration-300"
              />
            </div>
            <ul v-if="openInfo" class="flex flex-col gap-3">
              <li>{{ languageStore.lang.footer['courses'] }}</li>
              <li>{{ languageStore.lang.footer['mentor'] }}</li>
              <li>{{ languageStore.lang.footer['articles'] }}</li>
              <li>{{ languageStore.lang.footer['events'] }}</li>
            </ul>
          </div>
          <div id="Support" class="md:hidden block mb-5">
            <div
              class="flex justify-between cursor-pointer border-b border-b-gray-200 pb-3 mb-2"
              @click="openSupport = !openSupport"
            >
              <h3 class="font-extrabold text-lg">{{ languageStore.lang.footer['support'] }}</h3>
              <ChevronDown
                :class="openSupport ? 'rotate-180' : 'rotate-0'"
                class="transition-all duration-300"
              />
            </div>
            <ul v-if="openSupport" class="flex flex-col gap-3">
              <li>{{ languageStore.lang.footer['policy'] }}</li>
              <li>{{ languageStore.lang.footer['mentor'] }}</li>
              <li>{{ languageStore.lang.footer['support'] }}</li>
              <li>{{ languageStore.lang.footer['faqs'] }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full text-center mt-20">
        <p class="text-xs text-gray-600">{{ languageStore.lang.footer['rights'] }}</p>
      </div>
    </div>
  </div>
  <!-- footer -->
</template>

<style scoped>
h3 {
  margin-bottom: 10px;
}
li {
  cursor: pointer;
  margin-bottom: 2px;
  transition: 0.5s;
}

li:hover {
  color: #fea555;
  transform: translateX(10px);
}
</style>
