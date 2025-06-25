<template>
    <div class="relative h-screen overflow-hidden text-white">
        <!-- 背景图片变暗效果 -->
        <div
            class="absolute inset-0 origin-center bg-cover bg-center brightness-50 transition-transform duration-500 ease-in-out"
            :class="imageList[currentIndex].className"
            :style="{ transform: isAnimating ? 'scale(1.2)' : 'scale(1)' }"
            @transitionend="isAnimating = false"></div>

        <!-- 中间亮框 -->
        <div class="absolute inset-0 flex items-center justify-center">
            <div
                class="relative h-3/4 w-3/4 bg-cover bg-center brightness-100"
                :class="imageList[currentIndex].className"></div>
        </div>

        <!-- 切换按钮 -->
        <button
            @click="prevImage"
            class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/30 p-4 text-white transition-all hover:bg-white/50">
            &lt;
        </button>
        <button
            @click="nextImage"
            class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/30 p-4 text-white transition-all hover:bg-white/50">
            &gt;
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const currentIndex = ref(0)
    const isAnimating = ref(false)
    const imageList = ref([
        {
            id: 1,
            className:
                'bg-[url(https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)]',
        },
        {
            id: 2,
            className:
                'bg-[url(https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80)]',
        },
        {
            id: 3,
            className:
                'bg-[url(https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)]',
        },
    ])

    const nextImage = () => {
        isAnimating.value = true
        currentIndex.value = (currentIndex.value + 1) % imageList.value.length
    }

    const prevImage = () => {
        isAnimating.value = true
        currentIndex.value =
            (currentIndex.value - 1 + imageList.value.length) % imageList.value.length
    }
</script>
