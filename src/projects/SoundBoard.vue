<template>
    <div class="flex h-screen items-center gap-10 justify-self-center text-black">
        <div
            class="rounded-lg border-2 bg-gray-300 px-8 py-4 hover:scale-105 hover:bg-gray-400"
            v-for="(item, index) in soundList"
            :key="item.id"
            @click="handlePlayAudio(index)">
            {{ item.name }}
            <audio :id="item.id" :src="item.src"></audio>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const handlePlayAudio = (index) => {
        soundList.value.forEach((sound) => {
            const audio = document.getElementById(sound.id)
            audio.pause()
            audio.currentTime = 0
        })

        const selectedAudio = document.getElementById(soundList.value[index].id)
        selectedAudio.play()
    }

    const soundList = ref([
        {
            id: 1,
            name: 'applause',
            src: '/src/assets/sounds/applause.mp3',
        },
        {
            id: 2,
            name: 'boo',
            src: '/src/assets/sounds/boo.mp3',
        },
        {
            id: 3,
            name: 'gasp',
            src: '/src/assets/sounds/gasp.mp3',
        },
        {
            id: 4,
            name: 'tada',
            src: '/src/assets/sounds/tada.mp3',
        },
        {
            id: 5,
            name: 'victory',
            src: '/src/assets/sounds/victory.mp3',
        },
        {
            id: 6,
            name: 'wrong',
            src: '/src/assets/sounds/wrong.mp3',
        },
    ])
</script>
