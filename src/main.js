import Vue from 'vue'
import store from './store'
import {sync} from 'vuex-router-sync'
import {http, router} from './http'
import URLSearchParams from 'url-search-params'
import App from './App'
import Header from './layouts/default/Header'
import Sidebar from './layouts/default/Sidebar'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import checkPermission from './mixins/checkPermission'
import axios from "axios";
import EditButton from './components/EditButtonComponent'
import DeleteButton from './components/DeleteButtonComponent'

Vue.config.productionTip = true

global.URLSearchParams = URLSearchParams

sync(store, router)

Vue.use(http)
Vue.mixin(checkPermission)
Vue.use(ElementUI, {locale});
Vue.component('Header', Header)
Vue.component('Sidebar', Sidebar)
Vue.component('EditButton', EditButton);
Vue.component('DeleteButton', DeleteButton);
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 401) {
        store.dispatch('auth/clear')
        router.push({name: 'Login'})
    }
    if(error.response.status === 404 || error.response.status === 500 || error.response.status === 400) {
        app.$notify.error(error.response.data.message);
    }
    if(error.response.status === 403) {
        app.$notify.error(error.response.data.message);
        router.push({name: 'Dashboard'})
    }
    return Promise.reject(error);
});
