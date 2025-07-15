<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center overflow-hidden font-[Oswald] text-white">
        <h3 class="mb-0 text-center">
            Double click on the image to
            <i class="fas fa-heart text-red-600"></i>
            it
        </h3>
        <small class="mb-5 block text-center">
            You liked it
            <span>{{ likes }}</span>
            times
        </small>

        <div
            class="relative h-[440px] w-[300px] cursor-pointer overflow-hidden bg-cover bg-center shadow-lg"
            :style="{ backgroundImage: `url(${imageUrl})` }"
            @click="handleClick"
            ref="container">
            <i
                v-for="heart in hearts"
                :key="heart.id"
                class="fas fa-heart heart-anim absolute text-red-600"
                :style="{ top: heart.y + 'px', left: heart.x + 'px' }"></i>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'

    const likes = ref(0)
    const hearts = ref([])
    const container = ref(null)
    let clickTime = 0

    const handleClick = (e) => {
        const now = new Date().getTime()
        if (clickTime === 0) {
            clickTime = now
        } else {
            if (now - clickTime < 800) {
                createHeart(e)
                clickTime = 0
            } else {
                clickTime = now
            }
        }
    }

    const createHeart = (e) => {
        const rect = container.value.getBoundingClientRect()
        const xInside = e.clientX - rect.left
        const yInside = e.clientY - rect.top

        const id = Date.now()
        hearts.value.push({ id, x: xInside, y: yInside })
        likes.value++

        setTimeout(() => {
            hearts.value = hearts.value.filter((h) => h.id !== id)
        }, 1000)
    }

    const imageUrl =
        'https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'

    onMounted(() => {
        const fontLink = document.createElement('link')
        fontLink.href = 'https://fonts.googleapis.com/css?family=Oswald'
        fontLink.rel = 'stylesheet'
        document.head.appendChild(fontLink)

        const faLink = document.createElement('link')
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
        faLink.rel = 'stylesheet'
        faLink.crossOrigin = 'anonymous'
        document.head.appendChild(faLink)
    })
</script>

<style scoped>
    .heart-anim {
        position: absolute;
        animation: grow 0.6s linear;
        transform: translate(-50%, -50%) scale(0);
    }

    @keyframes grow {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
</style>
