import { createWebHistory, createRouter } from 'vue-router'

import ExpandingCards from '@/projects/ExpandingCards.vue'
import { compile } from 'vue'

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
    {
        path: '/Hoverboard',
        name: 'Hoverboard',
        component: () => import('@/projects/Hoverboard.vue'),
    },
    {
        path: '/Pokedex',
        name: 'Pokedex',
        component: () => import('@/projects/Pokedex.vue'),
    },
    {
        path: '/MobileTabNavigation',
        name: 'MobileTabNavigation',
        component: () => import('@/projects/MobileTabNavigation.vue'),
    },
    {
        path: '/PasswordStrengthBackground',
        name: 'PasswordStrengthBackground',
        component: () => import('@/projects/PasswordStrengthBackground.vue'),
    },
    {
        path: '/3dBackgroundBoxes',
        name: '3dBackgroundBoxes',
        component: () => import('@/projects/3dBackgroundBoxes.vue'),
    },
    {
        path: '/VerifyAccountUi',
        name: 'VerifyAccountUi',
        component: () => import('@/projects/VerifyAccountUi.vue'),
    },
    {
        path: '/LiveUserFilter',
        name: 'LiveUserFilter',
        component: () => import('@/projects/LiveUserFilter.vue'),
    },
    {
        path: '/FeedbackUiDesign',
        name: 'FeedbackUiDesign',
        component: () => import('@/projects/FeedbackUiDesign.vue'),
    },
    {
        path: '/RangeSlider',
        name: 'RangeSlider',
        component: () => import('@/projects/RangeSlider.vue'),
    },
    {
        path: '/NetflixMobileNavigation',
        name: 'NetflixMobileNavigation',
        component: () => import('@/projects/NetflixMobileNavigation.vue'),
    },
    {
        path: '/QuizApp',
        name: 'QuizApp',
        component: () => import('@/projects/QuizApp.vue'),
    },
    {
        path: '/TestimonialBoxSwitcher',
        name: 'TestimonialBoxSwitcher',
        component: () => import('@/projects/TestimonialBoxSwitcher.vue'),
    },
    {
        path: '/RandomImageGenerator',
        name: 'RandomImageGenerator',
        component: () => import('@/projects/RandomImageGenerator.vue'),
    },
    {
        path: '/TodoList',
        name: 'TodoList',
        component: () => import('@/projects/TodoList.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
