<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100 p-4 font-sans">
        <!-- 主面板容器 -->
        <div
            class="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md"
            v-if="!isSubmitted">
            <strong class="leading-relaxed text-gray-800">
                How satisfied are you with our
                <br />
                customer support performance?
            </strong>

            <!-- 评分选项容器 -->
            <div class="my-8 flex justify-center">
                <div
                    v-for="rating in ratings"
                    :key="rating.id"
                    @click="selectRating(rating.value)"
                    :class="[
                        'flex cursor-pointer flex-col items-center rounded-md p-5 transition-all duration-200',
                        selectedRating === rating.value
                            ? 'scale-110 bg-white shadow-lg'
                            : 'hover:bg-gray-50',
                    ]">
                    <img :src="rating.imgUrl" alt="{{ rating.label }}" class="mb-3 h-10 w-10" />
                    <small class="text-gray-600">{{ rating.label }}</small>
                </div>
            </div>

            <!-- 提交按钮 -->
            <button
                @click="submitFeedback"
                class="rounded-md bg-gray-800 px-8 py-3 text-white transition-all duration-200 hover:bg-gray-700 active:scale-98">
                Send Review
            </button>
        </div>

        <!-- 提交后的感谢面板 -->
        <div class="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md" v-else>
            <i class="fas fa-heart mb-4 text-4xl text-red-500"></i>
            <strong class="mb-1 block text-xl text-gray-800">Thank You!</strong>
            <strong class="mb-2 text-gray-700">Feedback: {{ selectedRating }}</strong>
            <p class="text-sm text-gray-500">
                We'll use your feedback to improve our customer support
            </p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    // 响应式状态
    const selectedRating = ref('Satisfied') // 默认选中Satisfied
    const isSubmitted = ref(false)

    // 评分选项数据
    const ratings = ref([
        {
            id: 1,
            imgUrl: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png',
            label: 'Unhappy',
            value: 'Unhappy',
        },
        {
            id: 2,
            imgUrl: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png',
            label: 'Neutral',
            value: 'Neutral',
        },
        {
            id: 3,
            imgUrl: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png',
            label: 'Satisfied',
            value: 'Satisfied',
        },
    ])

    // 选择评分
    const selectRating = (rating) => {
        selectedRating.value = rating
    }

    // 提交反馈
    const submitFeedback = () => {
        isSubmitted.value = true
    }
</script>

<style scoped>
    /* 完全通过Tailwind CSS类实现样式，无自定义CSS */
</style>
