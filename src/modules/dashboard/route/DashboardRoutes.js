import Dashboard from '../feature/Main.vue'

export default [
    {
        name: 'DashboardDefault',
        path: '/',
        component: Dashboard,
        meta:{
            title: 'Dashboard',
            layout: 'DefaultLayout',
            isPublic: false
        }
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta:{
            title: 'Dashboard',
            layout: 'DefaultLayout',
            isPublic: false
        }
    }
];
