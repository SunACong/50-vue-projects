<template>
    <div class="flex h-screen items-center justify-center bg-gray-900">
        <button
            class="relative h-20 w-48 overflow-hidden rounded-lg bg-blue-500 font-bold text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
            @click="addRipple">
            Click Me
            <span
                v-for="(ripple, index) in ripples"
                :key="index"
                :style="{
                    left: ripple.x + 'px',
                    top: ripple.y + 'px',
                    width: ripple.size + 'px',
                    height: ripple.size + 'px',
                }"
                class="animate-ripple pointer-events-none absolute rounded-full bg-white/50 opacity-0"></span>
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const ripples = ref([])

    const addRipple = (event) => {
        const button = event.currentTarget
        const rect = button.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const size = Math.max(button.offsetWidth, button.offsetHeight)

        ripples.value.push({ x, y, size })

        // 300ms 后移除波纹，与动画持续时间匹配
        setTimeout(() => {
            ripples.value.shift()
        }, 300)
    }
</script>

<style scoped>
    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }

    .animate-ripple {
        animation: ripple 1s ease-out;
    }
</style>
