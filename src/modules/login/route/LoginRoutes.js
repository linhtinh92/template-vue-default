import Login from '../feature/Main.vue'

export default [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta:{
            title: 'Login',
            layout: 'LoginLayout',
            isPublic: true
        }
    }
];
