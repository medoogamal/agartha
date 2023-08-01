import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutView from '../views/AboutView.vue'
import MapsView from '../views/library/MapsView.vue'

const supportedLanguages = ['en', 'ar']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ar' // Redirect the root path to the English version by default
    },
    {
      path: '/:lang',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const langParam = to.params.lang
        if (supportedLanguages.includes(langParam)) {
          next()
        } else {
          // Redirect to the 404 page if the provided language is unsupported
          next({ name: 'NotFound', params: { lang: 'en' }, component: NotFoundView })
        }
      }
    },
    {
      // Define the 404 page route
      path: '/:lang/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:lang/library',
      children: [
        {
          path: 'maps',
          name: 'maps',
          component: MapsView
        }
      ]
    },
    {
      // Define the 404 page route
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
