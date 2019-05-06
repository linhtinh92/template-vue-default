import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

function guardRoute (to, from, next) {
    const auth = router.app.$options.store.state.auth
    if(!auth.isLoggedIn) {
        next({
            path: '/login'
        })
    } else {
        next()
    }
}

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    to.matched.some((record) => {
        document.title = record.meta.title
        store.dispatch('common/updateTitle', record.meta.title)
        store.dispatch('common/updateLayout', record.meta.layout)
        if(!record.meta.isPublic) return guardRoute(to, from, next)
        next()
    })
})

export default router
