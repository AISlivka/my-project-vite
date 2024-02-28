import { createRouter, createWebHistory } from "vue-router"
import { ROUTE_NAMES } from "@/constants/RouteNames.ts"
import HomePage from "@/components/pages/HomePage.vue"
import TestPage from "@/components/pages/TestPage.vue"

export const routes = [
  {
    path: "/",
    name: ROUTE_NAMES.HOME_PAGE,
    component: HomePage,
    meta: {
      title: "MyProject",
      description: "MyProject",
    },
  },
  {
    path: "/test-page",
    name: ROUTE_NAMES.TEST_PAGE,
    component: TestPage,
    meta: {
      title: "MyProject",
      description: "MyProject",
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || "/"),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    } else {
      return {
        top: 0,
      }
    }
  },
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title}`
  document
    .querySelector('meta[name="description"]')!
    .setAttribute("content", to.meta.description as string)
  next()
})

export default router
