<template>
    <div class="flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 font-sans">
        <div class="max-w-2xl rounded-lg border-4 border-black bg-white p-8 text-center">
            <h2 class="mb-2 text-2xl font-bold">Verify Your Account</h2>
            <p class="mb-8 text-gray-600">
                We emailed you the six digit code to cool_guy@email.com
                <br />
                Enter the code below to confirm your email address.
            </p>

            <!-- 验证码输入框容器 -->
            <div class="mb-8 flex flex-wrap items-center justify-center">
                <input
                    v-for="(code, index) in codes"
                    :key="index"
                    v-model="codes[index]"
                    ref="codeInputs"
                    @keydown="handleKeyDown($event, index)"
                    class="mx-1 my-2 h-20 w-20 rounded-md border border-gray-200 text-center text-5xl font-light [caret-color:transparent] transition-all duration-300 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-200/50 focus:outline-none"
                    type="text"
                    maxlength="1"
                    inputmode="numeric"
                    pattern="[0-9]" />
            </div>

            <small
                class="inline-block max-w-md rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-600">
                This is design only. We didn't actually send you an email as we don't have your
                email, right?
            </small>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    // 验证码输入框响应式数据
    const codes = ref(new Array(6).fill(''))
    const codeInputs = ref([])

    // 组件挂载后聚焦第一个输入框
    onMounted(() => {
        codeInputs.value[0].focus()
    })

    // 处理键盘输入事件
    const handleKeyDown = (e, index) => {
        // 只允许数字输入
        if (!/\d/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
            e.preventDefault()
            return
        }

        // 数字输入处理
        if (e.key >= 0 && e.key <= 9) {
            codes.value[index] = e.key
            // 自动聚焦到下一个输入框
            if (index < 5) {
                setTimeout(() => codeInputs.value[index + 1].focus(), 10)
            }
        }

        // 退格键处理
        if (e.key === 'Backspace') {
            // 清空当前输入框
            codes.value[index] = ''
            // 聚焦到上一个输入框
            if (index > 0) {
                setTimeout(() => codeInputs.value[index - 1].focus(), 10)
            }
            e.preventDefault()
        }
    }
</script>

<style scoped>
    /* 完全通过Tailwind CSS类实现样式，无自定义CSS */
</style>
