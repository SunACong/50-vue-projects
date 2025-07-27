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
    {
        path: '/BackgroundSlider',
        name: 'BackgroundSlider',
        component: () => import('@/projects/BackgroundSlider.vue'),
    },
    {
        path: '/ThemeClock',
        name: 'ThemeClock',
        component: () => import('@/projects/ThemeClock.vue'),
    },
    {
        path: '/ButtonRippleEffect',
        name: 'ButtonRippleEffect',
        component: () => import('@/projects/ButtonRippleEffect.vue'),
    },
    {
        path: '/DragNDrop',
        name: 'DragNDrop',
        component: () => import('@/projects/DragNDrop.vue'),
    },
    {
        path: '/DrawingApp',
        name: 'DrawingApp',
        component: () => import('@/projects/DrawingApp.vue'),
    },
    {
        path: '/KineticLoader',
        name: 'KineticLoader',
        component: () => import('@/projects/KineticLoader.vue'),
    },
    {
        path: '/ContentPlaceholder',
        name: 'ContentPlaceholder',
        component: () => import('@/projects/ContentPlaceholder.vue'),
    },
    {
        path: '/StickyNavbar',
        name: 'StickyNavbar',
        component: () => import('@/projects/StickyNavbar.vue'),
    },
    {
        path: '/DoubleVerticalSlider',
        name: 'DoubleVerticalSlider',
        component: () => import('@/projects/DoubleVerticalSlider.vue'),
    },
    {
        path: '/ToastNotification',
        name: 'ToastNotification',
        component: () => import('@/projects/ToastNotification.vue'),
    },
    {
        path: '/GithubProfiles',
        name: 'GithubProfiles',
        component: () => import('@/projects/GithubProfiles.vue'),
    },
    {
        path: '/DoubleClickHeart',
        name: 'DoubleClickHeart',
        component: () => import('@/projects/DoubleClickHeart.vue'),
    },
    {
        path: '/AutoTextEffect',
        name: 'AutoTextEffect',
        component: () => import('@/projects/AutoTextEffect.vue'),
    },
    {
        path: '/PasswordGenerator',
        name: 'PasswordGenerator',
        component: () => import('@/projects/PasswordGenerator.vue'),
    },
    {
        path: '/GoodCheapFast',
        name: 'GoodCheapFast',
        component: () => import('@/projects/GoodCheapFast.vue'),
    },
    {
        path: '/NotesApp',
        name: 'NotesApp',
        component: () => import('@/projects/NotesApp.vue'),
    },
    {
        path: '/AnimatedCountdown',
        name: 'AnimatedCountdown',
        component: () => import('@/projects/AnimatedCountdown.vue'),
    },
    {
        path: '/ImageCarousel',
        name: 'ImageCarousel',
        component: () => import('@/projects/ImageCarousel.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
