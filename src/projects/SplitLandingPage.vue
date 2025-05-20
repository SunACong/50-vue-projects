<template>
    <div
        class="head-text flex h-screen items-center justify-center text-black"
        ref="container"
        @mousemove="handleMouseMove"
        @mouseleave="resetPanels">
        <div
            ref="leftSide"
            :class="[
                'relative h-full transition-all duration-700 ease-in-out',
                activePanel === 'left' ? 'w-3/4' : activePanel === 'none' ? 'w-1/2' : 'w-1/4',
            ]">
            <div class="absolute inset-0 bg-[url(@/assets/ps.jpg)] bg-cover"></div>
            <div class="absolute inset-0 bg-pink-300/50"></div>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center gap-10 text-white">
                <p class="text-6xl font-bold">Playstation 5</p>
                <button
                    class="rounded-lg bg-pink-500 px-6 py-2 text-white transition-all hover:bg-pink-600">
                    BUY NOW
                </button>
            </div>
        </div>
        <div
            ref="rightSide"
            :class="[
                'relative h-full transition-all duration-700 ease-in-out',
                activePanel === 'right' ? 'w-3/4' : activePanel === 'none' ? 'w-1/2' : 'w-1/4',
            ]">
            <div class="absolute inset-0 bg-[url(@/assets/xbox.jpg)] bg-cover"></div>
            <div class="absolute inset-0 bg-gray-200/50"></div>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center gap-10 text-white">
                <p class="text-6xl font-bold">Xbox Series X</p>
                <button
                    class="rounded-lg bg-gray-700 px-6 py-2 text-white transition-all hover:bg-gray-800">
                    BUY NOW
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    // 引用容器和两侧面板
    const container = ref(null)
    const leftSide = ref(null)
    const rightSide = ref(null)

    // 当前激活的面板
    const activePanel = ref('none')

    // 处理鼠标移动事件
    const handleMouseMove = (e) => {
        if (!container.value) return

        // 获取容器的宽度和鼠标位置
        const containerWidth = container.value.offsetWidth
        const mouseX = e.clientX

        // 判断鼠标在左半区还是右半区
        if (mouseX < containerWidth / 2) {
            activePanel.value = 'left'
        } else {
            activePanel.value = 'right'
        }
    }

    // 鼠标离开容器时重置面板状态
    const resetPanels = () => {
        activePanel.value = 'none'
    }
</script>
