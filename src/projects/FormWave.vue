<template>
    <div class="flex h-screen items-center justify-center bg-gray-800 text-gray-300">
        <div class="rounded-2xl bg-gray-500/60 p-12 text-center">
            <h1 class="text-4xl font-bold text-gray-300">Please Login</h1>
            <form class="">
                <div class="form-control relative mt-10 border-b-2 border-b-white">
                    <input
                        class="peer relative z-10 w-full bg-transparent py-3 text-white focus:border-sky-300 focus:outline-none"
                        type="text"
                        required
                        v-model="emailValue"
                        @focus="activeInput = 'email'"
                        @blur="handleBlur('email')" />
                    <label class="pointer-events-none absolute top-4 left-0">
                        <span
                            v-for="(letter, idx) in 'Email'.split('')"
                            :key="idx"
                            :class="[
                                'inline-block min-w-[5px] text-lg transition-all duration-300',
                                'transform-gpu',
                                {
                                    '-translate-y-8 text-sky-300':
                                        activeInput === 'email' || emailValue,
                                },
                            ]"
                            :style="{
                                transitionDelay: `${idx * 50}ms`,
                                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                            }">
                            {{ letter }}
                        </span>
                    </label>
                </div>
                <div class="form-control relative mt-10 border-b-2 border-b-white">
                    <input
                        class="peer relative z-10 w-full bg-transparent py-3 text-white focus:border-sky-300 focus:outline-none"
                        type="password"
                        required
                        v-model="passwordValue"
                        @focus="activeInput = 'password'"
                        @blur="handleBlur('password')" />
                    <label class="pointer-events-none absolute top-4 left-0">
                        <span
                            v-for="(letter, idx) in 'Password'.split('')"
                            :key="idx"
                            :class="[
                                'inline-block min-w-[5px] text-lg transition-all duration-300',
                                'transform-gpu',
                                {
                                    '-translate-y-8 text-sky-300':
                                        activeInput === 'password' || passwordValue,
                                },
                            ]"
                            :style="{
                                transitionDelay: `${idx * 50}ms`,
                                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                            }">
                            {{ letter }}
                        </span>
                    </label>
                </div>

                <button
                    class="mt-10 w-full rounded bg-blue-500 px-4 py-2 font-bold hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    type="submit">
                    Login
                </button>

                <p class="mt-10">
                    Don't have an account?
                    <a href="#" class="text-blue-400 hover:underline">Register</a>
                </p>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // 响应式状态变量
    const emailValue = ref('')
    const passwordValue = ref('')
    const activeInput = ref(null)

    // 处理输入框失去焦点
    const handleBlur = (inputName) => {
        // 如果输入框为空，则重置activeInput
        if (
            (inputName === 'email' && !emailValue.value) ||
            (inputName === 'password' && !passwordValue.value)
        ) {
            activeInput.value = null
        }
    }
</script>
