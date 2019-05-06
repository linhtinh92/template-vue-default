import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../modules/login/store/auth'
import common from './common'
import header from './header'
import { localStoragePlugin } from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { common, auth, header },
    plugins: [localStoragePlugin]
})
