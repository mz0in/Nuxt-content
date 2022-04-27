import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  components: [{
    path: '~/components',
    global: true
  }]
})
