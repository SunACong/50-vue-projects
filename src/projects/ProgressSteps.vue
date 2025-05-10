<template>
    <div class="py-96">
        <div class="relative mx-auto flex max-w-2/3 items-center justify-between">
            <div class="absolute z-0 h-2 w-full rounded-full bg-gray-200">
                <div
                    :style="{ width: `${(current / (steps.length - 1)) * 100}%` }"
                    class="absolute top-0 bottom-0 left-0 h-full rounded-full bg-blue-500 transition-all duration-300 ease-in-out"></div>
            </div>
            <div
                v-for="item in steps"
                :key="item"
                :class="[
                    'z-10 flex h-10 w-10 items-center justify-center rounded-full border-none transition-all duration-500 ease-in-out',
                    item.id - 1 <= current ? 'bg-blue-500 text-white' : 'bg-white',
                ]"
                class="border-2">
                {{ item.id }}
            </div>
        </div>
        <div class="mt-10 flex items-center justify-center gap-20 text-white">
            <button
                :class="[current === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
                class="rounded-2xl border-2 p-2 active:scale-90"
                @click="update('prev')"
                :disabled="current === 0">
                prev
            </button>
            <button
                :class="[
                    current === steps.length - 1
                        ? 'cursor-not-allowed opacity-50'
                        : 'cursor-pointer',
                ]"
                class="rounded-2xl border-2 p-2 active:scale-90"
                @click="update('next')"
                :disabled="current === steps.length - 1">
                next
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const current = ref(0)

    const steps = ref([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
    ])

    const update = (type) => {
        if (type === 'prev') {
            if (current.value > 0) {
                current.value--
            }
        } else {
            if (current.value < steps.value.length - 1) {
                current.value++
            }
        }
        console.log(current.value)
    }
</script>
