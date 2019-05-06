import axios from 'axios'
import router from './router'
import store from '@/store'
import * as constants from '@/constants'

export const http = {
    install (Vue, options) {
        this.setDefaults();
        this.addInterceptors();
    },
    setDefaults () {
        axios.defaults.baseURL = constants.API_BASE_URL;
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    },
    addInterceptors () {
        store.watch((state) => {
            return state.auth.accessToken
        }, (accessToken) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
            if(constants.DEBUG) {
                console.log('token set')
            }
        }, {
            deep: true
        })
    },
    storeToken (response) {
        const auth = store.state.auth
        auth.isLoggedIn = true
        auth.accessToken = response.data.data.user_token
        auth.user.name = response.data.data.full_name
        auth.user.id = response.data.data.id
        auth.user.permissions = response.data.data.permissions
        store.dispatch('auth/update', auth)
    },
    
}

export {router}
