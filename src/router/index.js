import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Cows from '../components/Cows.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', 
            name: 'Hello',
            component: HelloWorld
        },
        {
            path:'/cows',
            name: 'Cows',
            component: Cows
        }
        ]
    })