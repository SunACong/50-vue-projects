import { createMemoryHistory, createRouter } from 'vue-router'

import ExpandingCards from '@/projects/ExpandingCards.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ExpandingCards,
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
