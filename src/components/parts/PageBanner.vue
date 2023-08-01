<script setup>
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'

const languageStore = useLanguageStore()
const props = defineProps({
  image: String,
  name: String,
  parentName: String,
  parentPath: String
})
const { image, name, parentPath } = toRefs(props)
</script>

<template>
  <div class="relative w-full md:h-[340px] overflow-hidden">
    <img :src="image" class="w-full" alt="" />
    <div
      id="text"
      :class="languageStore.direction == 'ltr' ? 'left-10 md:left-20' : 'right-10 md:right-20'"
      class="absolute md:top-[50%] top-[20%] cursor-pointer"
    >
      <h1 class="text-white md:text-5xl text-4xl font-extrabold mb-2">{{ name }}</h1>

      <p class="text-white font-bold md:text-xl">
        <router-link :to="`/${languageStore.langUrl}/${parentPath}`">{{ parentName }}</router-link>
        /
        <router-link :to="`/${languageStore.langUrl}/${parentPath}/${name.toLowerCase()}`">{{
          name
        }}</router-link>
      </p>
    </div>
  </div>
</template>
