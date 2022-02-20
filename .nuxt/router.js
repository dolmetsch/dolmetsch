import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a4e95c94 = () => interopDefault(import('../pages/keyboards/english.vue' /* webpackChunkName: "pages/keyboards/english" */))
const _d1b5854e = () => interopDefault(import('../pages/keyboards/russian.vue' /* webpackChunkName: "pages/keyboards/russian" */))
const _1b0df774 = () => interopDefault(import('../pages/keyboards/thai.vue' /* webpackChunkName: "pages/keyboards/thai" */))
const _fa21a68a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/keyboards/english",
    component: _a4e95c94,
    name: "keyboards-english"
  }, {
    path: "/keyboards/russian",
    component: _d1b5854e,
    name: "keyboards-russian"
  }, {
    path: "/keyboards/thai",
    component: _1b0df774,
    name: "keyboards-thai"
  }, {
    path: "/",
    component: _fa21a68a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
