import { createWebHistory, createRouter } from 'vue-router'

import ExpandingCards from '@/projects/ExpandingCards.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/sections/Home.vue'),
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: () => import('@/sections/Projects.vue'),
    },
    {
        path: '/ExpandingCards',
        name: 'ExpandingCards',
        component: ExpandingCards,
    },
    {
        path: '/ProgressSteps',
        name: 'ProgressSteps',
        component: () => import('@/projects/ProgressSteps.vue'),
    },
    {
        path: '/HiddenSearchWidget',
        name: 'HiddenSearchWidget',
        component: () => import('@/projects/HiddenSearchWidget.vue'),
    },
    {
        path: '/RotatingNavigationAnimation',
        name: 'RotatingNavigationAnimation',
        component: () => import('@/projects/RotatingNavigationAnimation.vue'),
    },
    {
        path: '/BlurryLoading',
        name: 'BlurryLoading',
        component: () => import('@/projects/BlurryLoading.vue'),
    },
    {
        path: '/ScrollAnimation',
        name: 'ScrollAnimation',
        component: () => import('@/projects/ScrollAnimation.vue'),
    },
    {
        path: '/SplitLandingPage',
        name: 'SplitLandingPage',
        component: () => import('@/projects/SplitLandingPage.vue'),
    },
    {
        path: '/FormWave',
        name: 'FormWave',
        component: () => import('@/projects/FormWave.vue'),
    },
    {
        path: '/SoundBoard',
        name: 'SoundBoard',
        component: () => import('@/projects/SoundBoard.vue'),
    },
    {
        path: '/DadJokes',
        name: 'DadJokes',
        component: () => import('@/projects/DadJokes.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
