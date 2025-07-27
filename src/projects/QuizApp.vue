<template>
    <div
        class="font-poppins m-0 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-4">
        <div
            class="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300">
            <!-- 问题页面 -->
            <div v-if="!isQuizCompleted" class="p-8">
                <h2 class="py-4 text-center text-xl font-medium text-gray-800">
                    {{ currentQuestion.question }}
                </h2>

                <ul class="list-none p-0">
                    <li v-for="(option, index) in options" :key="index" class="mb-4">
                        <label class="flex cursor-pointer items-center">
                            <input
                                type="radio"
                                name="answer"
                                :value="option.key"
                                v-model="selectedAnswer"
                                class="mr-3 h-5 w-5 text-purple-600" />
                            <span class="text-gray-700">{{ option.text }}</span>
                        </label>
                    </li>
                </ul>
            </div>

            <!-- 结果页面 -->
            <div v-else class="p-8 text-center">
                <h2 class="mb-6 text-2xl font-bold text-gray-800">
                    You answered {{ score }}/{{ quizData.length }} questions correctly
                </h2>
                <button
                    @click="restartQuiz"
                    class="w-full rounded-none bg-purple-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-purple-700">
                    Restart
                </button>
            </div>

            <!-- 提交按钮 (仅在问题页面显示) -->
            <button
                v-if="!isQuizCompleted"
                @click="submitAnswer"
                class="w-full bg-purple-600 py-3.5 font-medium text-white transition-colors duration-300 hover:bg-purple-700"
                :disabled="!selectedAnswer">
                Submit
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    // 测验数据
    const quizData = [
        {
            question: 'Which language runs in a web browser?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'JavaScript',
            correct: 'd',
        },
        {
            question: 'What does CSS stand for?',
            a: 'Central Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Cascading Simple Sheets',
            d: 'Cars SUVs Sailboats',
            correct: 'b',
        },
        {
            question: 'What does HTML stand for?',
            a: 'Hypertext Markup Language',
            b: 'Hypertext Markdown Language',
            c: 'Hyperloop Machine Language',
            d: 'Helicopters Terminals Motorboats Lamborginis',
            correct: 'a',
        },
        {
            question: 'What year was JavaScript launched?',
            a: '1996',
            b: '1995',
            c: '1994',
            d: 'none of the above',
            correct: 'b',
        },
    ]

    // 响应式状态
    const currentQuestionIndex = ref(0)
    const selectedAnswer = ref(null)
    const score = ref(0)
    const isQuizCompleted = ref(false)

    // 计算属性 - 当前问题
    const currentQuestion = computed(() => quizData[currentQuestionIndex.value])

    // 计算属性 - 选项列表
    const options = computed(() => {
        if (!currentQuestion.value) return []
        return [
            { key: 'a', text: currentQuestion.value.a },
            { key: 'b', text: currentQuestion.value.b },
            { key: 'c', text: currentQuestion.value.c },
            { key: 'd', text: currentQuestion.value.d },
        ]
    })

    // 提交答案
    const submitAnswer = () => {
        if (!selectedAnswer.value) return

        // 检查答案是否正确
        if (selectedAnswer.value === currentQuestion.value.correct) {
            score.value++
        }

        // 移动到下一题或结束测验
        if (currentQuestionIndex.value < quizData.length - 1) {
            currentQuestionIndex.value++
            selectedAnswer.value = null
        } else {
            isQuizCompleted.value = true
        }
    }

    // 重新开始测验
    const restartQuiz = () => {
        currentQuestionIndex.value = 0
        selectedAnswer.value = null
        score.value = 0
        isQuizCompleted.value = false
    }
</script>

<style scoped></style>
