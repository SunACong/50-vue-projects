<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
        <div class="w-100 rounded-lg bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
            <div class="p-4 text-center text-2xl font-bold">密码生成器</div>
            <div>
                <input
                    type="text"
                    v-model="generatedPassword"
                    readonly
                    placeholder="生成的密码将显示在这里"
                    class="mb-4 w-full rounded border border-gray-300 p-2" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                    <label>密码长度</label>
                    <div class="flex items-center gap-2">
                        <input
                            type="number"
                            v-model="passwordLength"
                            min="1"
                            max="100"
                            class="w-16 p-1" />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <label>包含大写字母</label>
                    <input type="checkbox" v-model="includeUppercase" />
                </div>
                <div class="flex items-center justify-between">
                    <label>包含小写字母</label>
                    <input type="checkbox" v-model="includeLowercase" />
                </div>
                <div class="flex items-center justify-between">
                    <label>包含数字</label>
                    <input type="checkbox" v-model="includeNumbers" />
                </div>
                <div class="flex items-center justify-between">
                    <label>包含符号</label>
                    <input type="checkbox" v-model="includeSymbols" />
                </div>
                <button
                    @click="generatePassword"
                    class="cursor-pointer rounded bg-emerald-500 p-2 text-white hover:bg-emerald-600">
                    生成密码
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // 生成的密码
    const generatedPassword = ref('')
    // 密码长度
    const passwordLength = ref(20)
    // 是否包含大写字母
    const includeUppercase = ref(true)
    // 是否包含小写字母
    const includeLowercase = ref(true)
    // 是否包含数字
    const includeNumbers = ref(true)
    // 是否包含符号
    const includeSymbols = ref(true)

    // 生成密码的函数
    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const numberChars = '0123456789'
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

        let charSet = ''
        if (includeUppercase.value) charSet += uppercaseChars
        if (includeLowercase.value) charSet += lowercaseChars
        if (includeNumbers.value) charSet += numberChars
        if (includeSymbols.value) charSet += symbolChars

        if (charSet.length === 0) {
            generatedPassword.value = ''
            return
        }

        let password = ''
        for (let i = 0; i < passwordLength.value; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length)
            password += charSet[randomIndex]
        }

        generatedPassword.value = password
    }
</script>

<style scoped></style>
