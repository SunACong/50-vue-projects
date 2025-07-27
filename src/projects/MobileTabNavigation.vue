<template>
    <div class="flex min-h-screen items-center justify-center bg-purple-300 p-4 font-sans">
        <!-- 手机容器 -->
        <div
            class="relative h-[600px] w-[340px] overflow-hidden rounded-3xl border-4 border-gray-200">
            <!-- 内容区域 -->
            <div
                v-for="(tab, index) in tabs"
                :key="index"
                class="absolute inset-0 transition-opacity duration-300"
                :class="
                    index === currentTabIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                ">
                <img
                    :src="tab.imageUrl"
                    :alt="tab.name"
                    class="h-full w-full object-cover"
                    style="height: calc(100% - 64px)" />
            </div>

            <!-- 底部导航 -->
            <nav class="absolute bottom-0 left-0 flex h-16 w-full bg-white">
                <ul class="flex w-full">
                    <li
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="currentTabIndex = index"
                        class="flex flex-1 cursor-pointer flex-col items-center justify-center p-2 transition-colors duration-200"
                        :class="
                            index === currentTabIndex
                                ? 'text-purple-600'
                                : 'text-gray-500 hover:text-purple-500'
                        ">
                        <i :class="tab.iconClass" class="text-xl"></i>
                        <p class="mt-1 text-xs">{{ tab.name }}</p>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // 响应式状态管理当前选中的标签索引
    const currentTabIndex = ref(0)

    // 标签数据
    const tabs = [
        {
            name: 'Home',
            iconClass: 'fas fa-home',
            imageUrl:
                'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        },
        {
            name: 'Work',
            iconClass: 'fas fa-box',
            imageUrl:
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
            name: 'Blog',
            iconClass: 'fas fa-book-open',
            imageUrl:
                'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
        },
        {
            name: 'About Us',
            iconClass: 'fas fa-users',
            imageUrl:
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        },
    ]
</script>

<style scoped>
    /* 所有样式均通过Tailwind CSS原子类实现，此处留空 */
</style>
