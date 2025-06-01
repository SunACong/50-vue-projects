<template>
    <div class="m-12 flex flex-col items-center justify-center gap-8 text-white">
        <h3 class="font-mono text-2xl font-bold">Frequently Asked Questions</h3>
        <div
            v-for="(item, index) in FQList"
            :key="item.id"
            class="w-2xl overflow-hidden rounded-2xl bg-gray-500 p-8">
            <div class="flex cursor-pointer items-start justify-between">
                <div class="text-xl font-bold">{{ item.question }}</div>
                <div v-if="item.isOpen" class="text-2xl font-bold" @click="currentCollapse(index)">
                    -
                </div>
                <div v-else class="text-2xl font-bold" @click="currentCollapse(index)">+</div>
            </div>
            <Transition
                enter-active-class="transition duration-500 ease-in-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <div v-if="item.isOpen" class="mt-4 text-xl font-bold">
                    {{ item.answer }}
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const current = ref(0)

    const currentCollapse = (index) => {
        FQList.value[index].isOpen = !FQList.value[index].isOpen
    }

    const FQList = ref([
        {
            id: 1,
            question: 'What is Vue.js?',
            answer: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can easily scale between a simple static site and a complex single-page application.',
            isOpen: false,
        },
        {
            id: 2,
            question: 'What is Vue.js?',
            answer: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can easily scale between a simple static site and a complex single-page application.',
            isOpen: false,
        },
        {
            id: 3,
            question: 'What is Vue.js?',
            answer: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can easily scale between a simple static site and a complex single-page application.',
            isOpen: false,
        },
        {
            id: 4,
            question: 'What is Vue.js?',
            answer: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and can easily scale between a simple static site and a complex single-page application.',
            isOpen: false,
        },
    ])
</script>
