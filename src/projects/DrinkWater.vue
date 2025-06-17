<template>
    <div class="flex h-screen flex-col items-center justify-center gap-8 text-white">
        <h1 class="font-mono text-3xl">Drink Water</h1>
        <h3 class="font-mono">Goal: 2 Liters</h3>

        <div
            class="relative flex h-1/4 w-32 flex-col items-center justify-center rounded-b-3xl border-2 text-center overflow-hidden">
            <!-- 水的进度条 -->
            <div 
                class="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-500 ease-out"
                :style="{ height: `${currentAmount / 8 * 100}%` }"
            ></div>
            
            <!-- 剩余水量显示 -->
            <div class="relative z-10">
                <div class="text-2xl">{{ (2000 - currentAmount * 250) / 1000 }}L</div>
                <div>Remained</div>
            </div>

            <!-- 已喝水量显示 -->
            <div class="absolute top-2 text-lg font-bold" v-if="currentAmount > 0">
                {{ currentAmount * 250 }}ml
            </div>
        </div>

        <p class="font-mono">Select how many glasses of water that you have drank</p>

        <div class="flex flex-wrap items-center justify-center gap-4">
            <div
                :class="[
                    'h-24 w-8 basis-1/5 cursor-pointer rounded-b-2xl border-2 pt-5 text-center transition-all duration-300 ease-in-out',
                    item <= currentAmount ? 'bg-blue-500' : 'bg-gray-500',
                ]"
                v-for="item in 8"
                :key="item"
                @click="drink(item)">
                250 ml
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, reactive } from 'vue'

    const currentAmount = ref(0) // 当前水量

    const drink = (amount) => {
        currentAmount.value = amount
    }
</script>
