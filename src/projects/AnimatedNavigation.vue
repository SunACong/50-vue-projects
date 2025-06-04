<template>
    <div class="relative min-h-screen overflow-hidden">
        <!-- 上半部分背景 -->
        <div class="absolute top-0 left-0 z-0 h-1/2 w-full bg-sky-200"></div>
        <!-- 下半部分背景 -->
        <div class="absolute bottom-0 left-0 z-0 h-1/2 w-full bg-blue-500"></div>

        <!-- 主体内容 -->
        <div class="relative z-10 flex min-h-screen items-center justify-center">
            <nav
                :class="[
                    'flex items-center justify-between overflow-hidden rounded-md bg-white p-5 shadow-md transition-all duration-500',
                    isActive ? 'w-[350px]' : 'w-[80px]',
                ]">
                <ul
                    :class="[
                        'flex overflow-hidden transition-all duration-500',
                        isActive ? 'w-full' : 'w-0',
                    ]">
                    <li
                        v-for="(item, index) in menuItems"
                        :key="index"
                        :class="[
                            'transform transition-all duration-500',
                            isActive ? 'rotate-[360deg] opacity-100' : 'rotate-0 opacity-0',
                        ]">
                        <a href="#" class="mx-2 whitespace-nowrap text-black">{{ item }}</a>
                    </li>
                </ul>

                <button class="relative h-8 w-8" @click="toggleNav">
                    <span
                        :class="[
                            'absolute top-[10px] left-[5px] h-[2px] w-5 bg-[#5290f9] transition-transform duration-500',
                            isActive ? 'translate-y-[5.5px] rotate-[-765deg]' : '',
                        ]"></span>
                    <span
                        :class="[
                            'absolute bottom-[9px] left-[5px] h-[2px] w-5 bg-[#5290f9] transition-transform duration-500',
                            isActive ? '-translate-y-[5.5px] rotate-[765deg]' : '',
                        ]"></span>
                </button>
            </nav>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const isActive = ref(true)

    const toggleNav = () => {
        isActive.value = !isActive.value
    }

    const menuItems = ['Home', 'Works', 'About', 'Contact']
</script>

<style scoped>
    li {
        transition:
            transform 0.6s,
            opacity 0.6s;
    }
</style>
