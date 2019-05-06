import {router} from '@/http'
import store from '@/store'
import axios from 'axios'

const login = "/login"
const logout = "/logout"
export default {
    login (data) {
        return axios.post(login, data);
    },
    logout () {
        return axios.get(logout)
        .then(function (response) {
            store.dispatch("auth/clear");
            router.push({name: 'Login'})
        }).catch((error) => {
            this.$notify.error('Has error')
        });
    }
}
