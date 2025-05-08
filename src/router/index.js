import { createWebHistory, createRouter } from 'vue-router'

import ExpandingCards from '@/projects/ExpandingCards.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/sections/Home.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/sections/Projects.vue')
    },
    {
        path: '/ExpandingCards',
        name: 'ExpandingCards',
        component: ExpandingCards
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
