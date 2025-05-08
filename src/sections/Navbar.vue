<template>
    <header class="fixed top-0 right-0 left-0 z-50 bg-black/90">
        <div class="mx-auto max-w-7xl">
            <div class="c-space flex items-center justify-end py-5">
                <div class="mr-auto flex items-center justify-center gap-2">
                    <img class="h-20 w-20" src="@/assets/logo.png" alt="" />
                </div>
                <div class="flex items-center justify-center gap-10">
                    <div
                        v-for="item in navList"
                        :key="item.id"
                        @click="currentTab = item.id"
                        :class="[
                            'font-mono text-gray-200 transition-all hover:scale-105',
                            currentTab === item.id ? 'border-b-2 border-blue-400' : 'border-b-0',
                        ]">
                        <a :href="item.link" @click="goHome">{{ item.title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue'
    import { navList } from '../constants/index'

    const currentTab = ref(1)
</script>
