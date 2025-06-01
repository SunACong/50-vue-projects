<template>
    <div class="flex h-screen items-center justify-center text-white">
        <div v-if="noPressKey" class="btn key border-2">Press any key to get the keyCode</div>
        <div v-else class="flex gap-8 text-white">
            <div class="btn w-56 border-2 text-2xl">KeyCode: {{ handleKeyDown.keyCode }}</div>
            <div class="btn w-56 border-2 text-2xl">Key: {{ handleKeyDown.key }}</div>
            <div class="btn w-56 border-2 text-2xl">Code: {{ handleKeyDown.code }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const noPressKey = ref(false)

    const handleKeyDown = ref({
        keyCode: 0,
        key: '',
        code: '',
    })

    // 监听键盘事件，按下任意键时显示键码
    window.addEventListener('keydown', (event) => {
        noPressKey.value = false
        handleKeyDown.value.keyCode = event.keyCode
        handleKeyDown.value.key = event.key
        handleKeyDown.value.code = event.code
    })
</script>
