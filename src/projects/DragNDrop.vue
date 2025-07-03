<template>
    <div class="bg-steelblue flex h-screen items-center justify-center overflow-hidden">
        <div
            v-for="(empty, index) in empties"
            :key="index"
            class="m-2 h-36 w-36 border-4 border-black bg-white"
            :class="{ hovered: isHovered[index] }"
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
        'https://source.unsplash.com/random/150x150?nature=1',
        'https://source.unsplash.com/random/150x150?city=1',
        'https://source.unsplash.com/random/150x150?animal=1',
        'https://source.unsplash.com/random/150x150?food=1',
        'https://source.unsplash.com/random/150x150?portrait=1',
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
    .bg-steelblue {
        background-color: steelblue;
    }

    [draggable='true'] {
        transition: all 0.2s ease;
    }

    .hovered {
        background-color: #333;
        border-color: white;
        border-style: dashed;
    }
</style>
