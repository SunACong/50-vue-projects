<template>
    <div class="relative flex min-h-screen flex-col items-center justify-center font-sans">
        <!-- 打开按钮 -->
        <button
            class="fixed top-3 left-3 z-50 border-none bg-transparent text-2xl text-white"
            @click="isNavVisible = true">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Logo和标题 -->
        <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt="Logo"
            class="h-auto w-40" />
        <p class="mt-4 text-sm text-gray-700 uppercase">Mobile Navigation</p>

        <!-- 导航菜单 (三层嵌套) -->
        <div
            :class="[
                'fixed top-0 left-0 h-full transform transition-transform duration-300 ease-in-out',
                isNavVisible ? 'translate-x-0' : '-translate-x-full',
            ]"
            class="w-[60%] max-w-[480px] min-w-[320px] bg-gray-900">
            <div
                :class="[
                    'h-full transform transition-transform duration-300 ease-in-out',
                    isNavVisible ? 'translate-x-0 delay-100' : '-translate-x-full',
                ]"
                class="w-[95%] bg-red-600">
                <div
                    :class="[
                        'h-full transform transition-transform duration-300 ease-in-out',
                        isNavVisible ? 'translate-x-0 delay-200' : '-translate-x-full',
                    ]"
                    class="relative w-[95%] bg-white p-10">
                    <!-- 关闭按钮 -->
                    <button
                        class="absolute top-10 right-8 border-none bg-transparent text-xl text-gray-400"
                        @click="isNavVisible = false">
                        <i class="fas fa-times"></i>
                    </button>

                    <!-- 导航Logo -->
                    <img
                        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                        alt="Logo"
                        class="mb-8 h-auto w-32" />

                    <!-- 导航菜单 -->
                    <ul class="list-none p-0">
                        <li class="mb-5">
                            <a
                                href="#"
                                class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                Teams
                            </a>
                        </li>
                        <li class="mb-5">
                            <a
                                href="#"
                                class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                Locations
                            </a>
                        </li>
                        <li class="mb-5">
                            <a
                                href="#"
                                class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                Life at Netflix
                            </a>
                        </li>
                        <li>
                            <ul class="mt-2 list-none pl-5">
                                <li class="mb-3">
                                    <a
                                        href="#"
                                        class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                        Netflix culture memo
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a
                                        href="#"
                                        class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                        Work life balance
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a
                                        href="#"
                                        class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                        Inclusion & diversity
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a
                                        href="#"
                                        class="text-sm text-gray-900 uppercase no-underline transition-colors hover:text-red-600">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // 响应式状态管理导航显示/隐藏
    const isNavVisible = ref(false)
</script>

<style scoped>
    /* 完全使用Tailwind CSS类，无自定义样式 */
</style>
