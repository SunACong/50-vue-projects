<template>
    <div class="relative flex h-screen w-screen overflow-hidden">
        <!-- 左侧 -->
        <div class="relative h-full w-[35%] overflow-hidden">
            <div
                v-for="(slide, index) in leftSlides"
                :key="index"
                class="absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-500 ease-in-out"
                :class="[index === activeSlideIndex ? 'z-10' : 'pointer-events-none z-0']"
                :style="{
                    backgroundColor: slide.bgColor,
                    transform: `translateY(${-(index - activeSlideIndex) * 100}%)`,
                }">
                <h1 class="-mt-8 mb-2 text-4xl">{{ slide.title }}</h1>
                <p class="text-lg">{{ slide.description }}</p>
            </div>

            <!-- 向下按钮 -->
            <div class="absolute top-1/2 right-0 z-20 -translate-y-1/2">
                <button
                    class="rounded-l-md bg-white p-4 text-gray-500 shadow hover:text-black"
                    @click="changeSlide('down')">
                    👇
                </button>
            </div>
        </div>

        <!-- 右侧 -->
        <div class="relative h-full w-[65%] overflow-hidden">
            <div
                v-for="(slide, index) in rightSlides"
                :key="index"
                class="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
                :class="[index === activeSlideIndex ? 'z-10' : 'pointer-events-none z-0']"
                :style="{
                    backgroundImage: `url(${slide.imageUrl})`,
                    transform: `translateY(${(index - activeSlideIndex) * 100}%)`,
                }"></div>

            <!-- 向上按钮 -->
            <div class="absolute top-1/2 left-0 z-20 -translate-y-1/2">
                <button
                    class="rounded-r-md bg-white p-4 text-gray-500 shadow hover:text-black"
                    @click="changeSlide('up')">
                    👆
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const activeSlideIndex = ref(0)

    const leftSlides = [
        { title: 'Flying eagle', description: 'in the sunset', bgColor: '#FFB866' },
        { title: 'Lonely castle', description: 'in the wilderness', bgColor: '#252E33' },
        { title: 'Bluuue Sky', description: "with it's mountains", bgColor: '#2A86BA' },
        { title: 'Nature flower', description: 'all in pink', bgColor: '#FD3555' },
    ]

    const rightSlides = [
        {
            imageUrl:
                'https://images.unsplash.com/photo-1508768787810-6adc1f613514?auto=format&fit=crop&w=1350&q=80',
        },
        {
            imageUrl:
                'https://images.unsplash.com/photo-1519981593452-666cf05569a9?auto=format&fit=crop&w=715&q=80',
        },
        {
            imageUrl:
                'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?auto=format&fit=crop&w=1002&q=80',
        },
        {
            imageUrl:
                'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?auto=format&fit=crop&w=1050&q=80',
        },
    ]

    function changeSlide(direction) {
        if (direction === 'up') {
            activeSlideIndex.value = (activeSlideIndex.value + 1) % leftSlides.length
        } else {
            activeSlideIndex.value =
                (activeSlideIndex.value - 1 + leftSlides.length) % leftSlides.length
        }
    }
</script>
