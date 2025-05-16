<template>
    <div class="relative h-screen w-screen">
        <div
            :style="{ filter: `blur(${blurPx}px)` }"
            class="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80)] bg-cover bg-center bg-no-repeat"></div>

        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-5xl font-bold text-gray-300">{{ loading }}%</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const loading = ref(0)
    const blurPx = ref(30)

    let interval

    onMounted(() => {
        interval = setInterval(() => {
            if (loading.value < 100) {
                loading.value += 2
                blurPx.value = 30 * (1 - loading.value / 100)
            } else {
                clearInterval(interval)
            }
        }, 30)
    })

    onBeforeUnmount(() => {
        clearInterval(interval)
    })
</script>
