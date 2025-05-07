<template>
    <header class="fixed top-0 right-0 left-0 z-50 bg-black/90">
        <div class="mx-auto max-w-7xl">
            <div class="c-space flex items-center justify-end py-5">
                <div class="mr-auto flex items-center justify-center gap-2">
                    <img src="../assets/vue.svg" alt="" />
                    <h1 class="head-text">5050</h1>
                </div>
                <div class="flex items-center justify-center gap-10">
                    <div
                        v-for="item in navList"
                        :key="item.id"
                        @click="currentTab = item.id"
                        :class="[
                            'text-gray-200 transition-all hover:scale-105',
                            currentTab === item.id ? 'border-b-2 border-blue-400' : 'border-b-0',
                        ]">
                        <a :href="item.link">{{ item.title }}</a>
                    </div>
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue'
    import { navList } from '../constants/index'

    const currentTab = ref(0)
</script>
