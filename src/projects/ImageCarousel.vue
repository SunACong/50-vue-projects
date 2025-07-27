<template>
    <div
        class="absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div
            class="flex h-full transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                class="h-[400px] w-[800px] object-cover" />
        </div>
        <div class="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-5">
            <button
                @click="prevImage"
                class="cursor-pointer rounded border-none bg-[rgba(0,0,0,0.5)] px-4 py-2 text-white hover:bg-[rgba(0,0,0,0.8)]">
                上一张
            </button>
            <button
                @click="nextImage"
                class="cursor-pointer rounded border-none bg-[rgba(0,0,0,0.5)] px-4 py-2 text-white hover:bg-[rgba(0,0,0,0.8)]">
                下一张
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    // 模拟图片数组，可根据实际需求替换
    const images = ref([
        'https://picsum.photos/id/10/800/400',
        'https://picsum.photos/id/11/800/400',
        'https://picsum.photos/id/12/800/400',
        'https://picsum.photos/id/13/800/400',
    ])

    const currentIndex = ref(0)
    let autoPlayTimer = null

    // 切换到上一张图片
    const prevImage = () => {
        currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
    }

    // 切换到下一张图片
    const nextImage = () => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length
    }

    // 自动轮播函数
    const startAutoPlay = () => {
        autoPlayTimer = setInterval(() => {
            nextImage()
        }, 3000)
    }

    // 组件挂载时开始自动轮播
    onMounted(() => {
        startAutoPlay()
    })

    // 组件卸载时清除定时器
    onUnmounted(() => {
        clearInterval(autoPlayTimer)
    })
</script>

<style scoped></style>
