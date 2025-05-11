<template>
    <div class="flex h-screen items-center justify-center text-white">
        <div class="flex h-14 border-2 bg-white">
            <input
                :class="[
                    'text-gray-500 outline-0 transition-all duration-300 ease-in-out',
                    isOpen ? 'w-96 p-4' : 'w-0',
                ]"
                placeholder="Search..."
                type="text" />
            <button class="h-14 w-14 text-3xl" @click="toggle">🔍</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const isOpen = ref(false)

    const toggle = () => {
        isOpen.value = !isOpen.value
    }
</script>
