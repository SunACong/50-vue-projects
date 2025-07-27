<template>
    <div class="font-roboto flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <h1 class="title my-6 text-center text-3xl font-bold">Random Image Feed</h1>
        <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-center">
            <div v-for="(image, index) in images" :key="index" class="m-3">
                <img
                    :src="image.url"
                    :alt="'Random image ' + (index + 1)"
                    class="h-full w-full max-w-full object-cover"
                    :style="{ width: image.width + 'px', height: image.height + 'px' }"
                    @error="handleImageError(index)" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const images = ref([])
    const baseURL = 'https://picsum.photos'
    const rows = 5
    const columns = 3

    const getRandomSize = () => Math.floor(Math.random() * 10) + 300

    const generateImages = () => {
        const newImages = []
        for (let i = 0; i < rows * columns; i++) {
            const width = getRandomSize()
            const height = getRandomSize()
            // 用随机 query 避免缓存重复
            const url = `${baseURL}/${width}/${height}?random=${Math.random()}`
            newImages.push({ url, width, height })
        }
        images.value = newImages
    }

    const handleImageError = (index) => {
        const width = getRandomSize()
        const height = getRandomSize()
        images.value[index] = {
            ...images.value[index],
            url: `${baseURL}/${width}/${height}?random=${Math.random()}`,
            width,
            height,
        }
    }

    onMounted(generateImages)
</script>

<style scoped></style>
