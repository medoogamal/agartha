// store.js
import { defineStore } from 'pinia'
import en from '../en'
import ar from '../ar'
import { watchEffect } from 'vue'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    lang: en,
    direction: 'rtl',
    langUrl: 'en'
  }),
  actions: {
    changeLanguage(lang) {
      watchEffect(() => {
        if (lang == 'ar') {
          this.lang = ar
          ;(this.direction = 'rtl'), (this.langUrl = 'ar')
        } else {
          this.lang = en
          this.direction = 'ltr'
          this.langUrl = 'en'
        }
      })
    }
  }
})
