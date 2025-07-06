<template>
    <div class="flex h-screen items-center justify-center overflow-hidden bg-sky-500">
        <div
            v-for="(empty, index) in empties"
            :key="index"
            :class="[
                'm-2 h-36 w-36 border-4 border-black bg-white',
                isHovered[index] && 'border-dashed border-black bg-gray-800',
            ]"
            @dragover.prevent="dragOver"
            @dragenter.prevent="dragEnter(index)" 
            @dragleave="dragLeave(index)"
            @drop="dragDrop(index)">
            <div
                v-if="index === filledIndex"
                class="h-full w-full cursor-pointer bg-cover"
                :style="{ backgroundImage: `url(${imageUrls[index]})` }"
                draggable="true"
                @dragstart="dragStart"
                @dragend="dragEnd"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const filledIndex = ref(0)
    const isHovered = ref(Array(5).fill(false))

    const empties = Array.from({ length: 5 }, (_, index) => index)

    const imageUrls = [
        'https://picsum.photos/id/10/150/150',
        'https://picsum.photos/id/11/150/150',
        'https://picsum.photos/id/12/150/150',
        'https://picsum.photos/id/13/150/150',
        'https://picsum.photos/id/14/150/150',
    ]

    const dragStart = () => {
        // 模拟 hold 效果
    }

    const dragEnd = () => {
        // 模拟恢复效果
    }

    const dragOver = () => {}

    const dragEnter = (index) => {
        isHovered.value[index] = true
    }

    const dragLeave = (index) => {
        isHovered.value[index] = false
    }

    const dragDrop = (index) => {
        filledIndex.value = index
        isHovered.value = Array(5).fill(false)
    }
</script>

<style scoped>
    [draggable='true'] {
        transition: all 0.2s ease;
    }
</style>
