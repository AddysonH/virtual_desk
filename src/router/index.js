import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Cows from '../components/Cows.vue'
import StartupDesk from '../components/StartupDesk.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', 
            name: 'Home',
            component: Home
        },
        {
            path:'/cows',
            name: 'Cows',
            component: Cows
        },
        {
            path: '/StartupDesk',
            name: 'StartupDesk',
            component: StartupDesk
        }
        ]
    })