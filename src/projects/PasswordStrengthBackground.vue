<template>
    <div class="m-0 flex min-h-screen items-center justify-center overflow-hidden">
        <!-- 动态模糊背景 -->
        <div
            class="absolute inset-0 z-0 -m-5 bg-cover bg-center transition-all duration-300 ease-out"
            :style="{
                'background-image': `url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')`,
                filter: `blur(${blurValue}px)`,
            }"></div>

        <!-- 登录表单 -->
        <div class="z-10 w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
            <h1 class="mb-2 text-center text-3xl font-bold">Image Password Strength</h1>
            <p class="mb-6 text-center text-sm text-gray-600">
                Change the password to see the effect
            </p>

            <div class="mb-4 text-left">
                <label for="email" class="mb-1 block text-gray-800">Email:</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    class="w-full rounded border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>

            <div class="mb-6 text-left">
                <label for="password" class="mb-1 block text-gray-800">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    v-model="password"
                    class="w-full rounded border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>

            <button
                type="submit"
                class="w-full rounded bg-black py-2 text-white transition-colors hover:bg-gray-800">
                Submit
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    // 响应式密码状态
    const password = ref('')

    // 根据密码长度计算模糊值（最大20px，最小0px）
    const blurValue = computed(() => {
        const baseBlur = 20
        const lengthFactor = 2
        return Math.max(baseBlur - password.value.length * lengthFactor, 0)
    })
</script>

<style scoped>
    /* 所有样式均通过Tailwind CSS原子类实现，此处留空 */
</style>
