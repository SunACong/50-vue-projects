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
    {
        path: '/EventKeyCodes',
        name: 'EventKeyCodes',
        component: () => import('@/projects/EventKeyCodes.vue'),
    },
    {
        path: '/FAQCollapse',
        name: 'FAQCollapse',
        component: () => import('@/projects/FAQCollapse.vue'),
    },
    {
        path: '/RandomChoicePicker',
        name: 'RandomChoicePicker',
        component: () => import('@/projects/RandomChoicePicker.vue'),
    },
    {
        path: '/AnimatedNavigation',
        name: 'AnimatedNavigation',
        component: () => import('@/projects/AnimatedNavigation.vue'),
    },
    {
        path: '/IncrementingCounter',
        name: 'IncrementingCounter',
        component: () => import('@/projects/IncrementingCounter.vue'),
    },
    {
        path: '/DrinkWater',
        name: 'DrinkWater',
        component: () => import('@/projects/DrinkWater.vue'),
    },
    {
        path: '/MovieApp',
        name: 'MovieApp',
        component: () => import('@/projects/MovieApp.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
