<template>
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <div class="min-h-[3rem] p-4 text-center text-2xl font-bold">
            {{ displayedText }}
            <span class="inline-block w-[1ch] animate-ping align-bottom">|</span>
        </div>

        <div class="mt-8 flex flex-col items-center">
            <label for="speed" class="mb-2 text-lg">调节打字速度</label>
            <input id="speed" type="range" min="50" max="500" v-model="speed" class="w-64" />
            <span class="mt-2">速度: {{ speed }}ms</span>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, onMounted, onUnmounted } from 'vue'

    const fullText = '这是一个打字机效果示例，字母或汉字会一个个显示！'
    const displayedText = ref('')
    const speed = ref(150)

    const isDeleting = ref(false)
    let timeoutId = null
    let index = 0

    const typeLoop = () => {
        const current = fullText.slice(0, index)
        displayedText.value = current

        if (!isDeleting.value) {
            if (index < fullText.length) {
                index++
                timeoutId = setTimeout(typeLoop, speed.value)
            } else {
                isDeleting.value = true
                timeoutId = setTimeout(typeLoop, 1000) // 停顿后开始删除
            }
        } else {
            if (index > 0) {
                index--
                timeoutId = setTimeout(typeLoop, speed.value)
            } else {
                isDeleting.value = false
                timeoutId = setTimeout(typeLoop, 500) // 停顿后重新打字
            }
        }
    }

    onMounted(() => {
        typeLoop()
    })

    onUnmounted(() => {
        if (timeoutId) clearTimeout(timeoutId)
    })

    watch(speed, (newSpeed) => {
        // 每次变速立即影响后续节奏
        if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(typeLoop, newSpeed)
        }
    })
</script>
