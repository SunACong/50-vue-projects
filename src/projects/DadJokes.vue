<template>
    <div class="flex h-screen items-center justify-center">
        <div class="flex w-xl flex-col items-center justify-center gap-20 rounded-2xl bg-white p-8">
            <h3 class="text-xl font-bold text-gray-600">Don't Laugh Challenge</h3>
            <div id="joke" class="text-2xl">{{ joke }}</div>
            <button id="" class="btn bg-blue-500 hover:bg-blue-300" @click="getJoke">
                Get Another Joke
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const joke = ref('')

    async function getJoke() {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }

        try {
            const response = await fetch('https://icanhazdadjoke.com', config)
            const data = await response.json()
            joke.value = data.joke
        } catch (error) {
            console.error('Error fetching joke:', error)
            joke.value = 'Failed to load joke. Try again!'
        }
    }

    // 初始化时获取第一个笑话
    getJoke()
</script>
