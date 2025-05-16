import { createWebHistory, createRouter } from 'vue-router'

import ExpandingCards from '@/projects/ExpandingCards.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/sections/Home.vue')
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: () => import('@/sections/Projects.vue')
    },
    {
        path: '/ExpandingCards',
        name: 'ExpandingCards',
        component: ExpandingCards
    },
    {
        path: '/ProgressSteps',
        name: 'ProgressSteps',
        component: () => import('@/projects/ProgressSteps.vue')
    },
    {
        path: '/HiddenSearchWidget',
        name: 'HiddenSearchWidget',
        component: () => import('@/projects/HiddenSearchWidget.vue')
    },
    {
        path: '/RotatingNavigationAnimation',
        name: 'RotatingNavigationAnimation',
        component: () => import('@/projects/RotatingNavigationAnimation.vue')
    },
    {
        path: '/BlurryLoading',
        name: 'BlurryLoading',
        component: () => import('@/projects/BlurryLoading.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
