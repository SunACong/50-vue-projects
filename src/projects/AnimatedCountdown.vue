    <template>
        <div class="fixed inset-0 flex items-center justify-center bg-white">
            <!-- GO 文字 -->
            <div v-if="showGo" class="text-7xl font-bold text-blue-500">GO</div>

            <!-- 倒计时数字动画 -->
            <div v-else class="relative h-[200px] w-[200px]">
                <span
                    v-for="(num, idx) in numbers"
                    :key="idx"
                    v-show="currentIndex === idx"
                    :class="[
                        'absolute top-1/2 left-1/2 origin-[50%_200%] text-6xl font-bold text-blue-600 transition-all duration-500 ease-in-out',
                        stage === 'in' ? 'scale-0 rotate-[120deg] opacity-0' : '',
                        stage === 'center' ? 'scale-100 rotate-0 opacity-100' : '',
                        stage === 'out' ? 'scale-0 rotate-[-120deg] opacity-0' : '',
                    ]">
                    {{ num }}
                </span>
            </div>

            <!-- 开始按钮 -->
            <div v-if="!started" class="absolute bottom-20">
                <button
                    @click="startCountdown"
                    class="rounded bg-blue-500 px-6 py-2 text-white shadow hover:bg-blue-600">
                    开始
                </button>
            </div>
        </div>
    </template>

    <script setup>
        import { ref } from 'vue'

        const numbers = [3, 2, 1]
        const currentIndex = ref(0)
        const stage = ref('in') // "in", "center", "out"
        const started = ref(false)
        const showGo = ref(true)

        const reset = () => {
            started.value = false
            showGo.value = true
            currentIndex.value = 0
        }

        const runAnimation = async () => {
            showGo.value = false
            for (let i = 0; i < numbers.length; i++) {
                currentIndex.value = i

                stage.value = 'in'
                await wait(100)

                stage.value = 'center'
                await wait(1000)

                stage.value = 'out'
                await wait(500)
            }

            showGo.value = true
            stage.value = ''
            await wait(1000)
            reset()
        }

        const startCountdown = () => {
            started.value = true
            runAnimation()
        }

        function wait(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }
    </script>
