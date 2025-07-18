<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
        <div class="w-96 rounded-lg bg-white p-8 shadow-lg">
            <h1 class="mb-6 text-center text-2xl font-bold">Good - Cheap - Fast 三选一</h1>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <span class="text-gray-700">高质量 (Good)</span>
                    <label class="flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            class="hidden"
                            :checked="good"
                            @change="toggleFeature('good')" />
                        <div
                            :class="[
                                'h-6 w-12 rounded-full bg-gray-300 p-1 transition-all',
                                good ? 'bg-green-500' : '',
                            ]">
                            <div
                                :class="[
                                    'h-4 w-4 rounded-full bg-white transition-all',
                                    good ? 'translate-x-6' : '',
                                ]"></div>
                        </div>
                        <span
                            :class="[
                                'ml-2 text-sm font-medium',
                                good ? 'text-green-500' : 'text-gray-500',
                            ]">
                            {{ good ? 'ON' : 'OFF' }}
                        </span>
                    </label>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-700">低成本 (Cheap)</span>
                    <label class="flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            class="hidden"
                            :checked="cheap"
                            @change="toggleFeature('cheap')" />
                        <div
                            :class="[
                                'h-6 w-12 rounded-full bg-gray-300 p-1 transition-all',
                                cheap ? 'bg-green-500' : '',
                            ]">
                            <div
                                :class="[
                                    'h-4 w-4 rounded-full bg-white transition-all',
                                    cheap ? 'translate-x-6' : '',
                                ]"></div>
                        </div>
                        <span
                            :class="[
                                'ml-2 text-sm font-medium',
                                cheap ? 'text-green-500' : 'text-gray-500',
                            ]">
                            {{ cheap ? 'ON' : 'OFF' }}
                        </span>
                    </label>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-gray-700">快速交付 (Fast)</span>
                    <label class="flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            class="hidden"
                            :checked="fast"
                            @change="toggleFeature('fast')" />
                        <div
                            :class="[
                                'h-6 w-12 rounded-full bg-gray-300 p-1 transition-all',
                                fast ? 'bg-green-500' : '',
                            ]">
                            <div
                                :class="[
                                    'h-4 w-4 rounded-full bg-white transition-all',
                                    fast ? 'translate-x-6' : '',
                                ]"></div>
                        </div>
                        <span
                            :class="[
                                'ml-2 text-sm font-medium',
                                fast ? 'text-green-500' : 'text-gray-500',
                            ]">
                            {{ fast ? 'ON' : 'OFF' }}
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // 初始化三个开关状态
    const good = ref(false)
    const cheap = ref(false)
    const fast = ref(false)

    // 计算当前已开启的功能数量
    const getActiveCount = () => {
        let count = 0
        if (good.value) count++
        if (cheap.value) count++
        if (fast.value) count++
        return count
    }

    // 实现切换功能的方法
    const toggleFeature = (feature) => {
        switch (feature) {
            case 'good':
                // 如果当前已经有两个开启，且要开启 good，则需要关闭一个
                if (!good.value && getActiveCount() >= 2) {
                    // 关闭第一个开启的其他功能
                    if (cheap.value) cheap.value = false
                    else if (fast.value) fast.value = false
                }
                good.value = !good.value
                break
            case 'cheap':
                // 如果当前已经有两个开启，且要开启 cheap，则需要关闭一个
                if (!cheap.value && getActiveCount() >= 2) {
                    // 关闭第一个开启的其他功能
                    if (good.value) good.value = false
                    else if (fast.value) fast.value = false
                }
                cheap.value = !cheap.value
                break
            case 'fast':
                // 如果当前已经有两个开启，且要开启 fast，则需要关闭一个
                if (!fast.value && getActiveCount() >= 2) {
                    // 关闭第一个开启的其他功能
                    if (good.value) good.value = false
                    else if (cheap.value) cheap.value = false
                }
                fast.value = !fast.value
                break
        }
    }
</script>
