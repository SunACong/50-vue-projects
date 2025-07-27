<template>
    <div
        class="relative h-screen w-screen overflow-hidden bg-[#516dff] font-[Press_Start_2P] text-white">
        <!-- 开始屏幕 -->
        <div
            v-if="currentScreen === 'start'"
            class="transition-margin flex h-full w-full flex-col items-center justify-center duration-500 ease-out">
            <h1 class="mb-8 text-center text-4xl leading-tight">Catch The Insect</h1>
            <button
                @click="currentScreen = 'select'"
                class="cursor-pointer bg-white px-6 py-4 text-[#516dff] hover:opacity-90 focus:outline-none">
                Play Game
            </button>
        </div>

        <!-- 选择昆虫屏幕 -->
        <div
            v-else-if="currentScreen === 'select'"
            class="transition-margin flex h-full w-full flex-col items-center justify-center duration-500 ease-out">
            <h1 class="mb-8 text-center text-2xl">What is your "favorite" insect?</h1>
            <ul class="flex list-none flex-wrap justify-center p-0">
                <li class="m-4" v-for="insect in insectsList" :key="insect.id">
                    <button
                        @click="selectInsect(insect)"
                        class="flex h-36 w-36 cursor-pointer flex-col items-center justify-center border-2 border-white bg-transparent text-white transition-colors hover:bg-white hover:text-[#516dff]">
                        <p class="mb-2">{{ insect.name }}</p>
                        <img
                            :src="insect.src"
                            :alt="insect.name"
                            class="h-20 w-20 object-contain"
                            @error="handleImageError($event)" />
                    </button>
                </li>
            </ul>
        </div>

        <!-- 游戏屏幕 -->
        <div v-else-if="currentScreen === 'game'" class="relative h-full w-full">
            <h3 class="absolute top-5 left-5 text-xl">Time: {{ formattedTime }}</h3>
            <h3 class="absolute top-5 right-5 text-xl">Score: {{ score }}</h3>
            <div
                v-if="messageVisible"
                class="absolute top-0 left-1/2 z-10 w-full -translate-x-1/2 transform bg-black/50 py-5 text-center opacity-100 transition-all duration-500">
                <p class="leading-relaxed">
                    Are you annoyed yet?
                    <br />
                    You are playing an impossible game!!
                </p>
            </div>

            <!-- 昆虫元素 -->
            <div
                v-for="(insect, index) in activeInsects"
                :key="index"
                class="absolute flex cursor-pointer items-center justify-center transition-transform duration-300 ease-in-out"
                :style="{
                    top: `${insect.y}px`,
                    left: `${insect.x}px`,
                    transform: `translate(-50%, -50%) scale(${insect.caught ? 0 : 1}) rotate(${insect.rotation}deg)`,
                }"
                @click="catchInsect(index)">
                <img
                    :src="selectedInsect.src"
                    :alt="selectedInsect.name"
                    class="h-24 w-24 object-contain" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

    // 响应式状态
    const currentScreen = ref('start')
    const selectedInsect = ref(null)
    const score = ref(0)
    const time = ref(0)
    const messageVisible = ref(false)
    const activeInsects = ref([])
    const gameTimer = ref(null)
    const insectTimer = ref(null)

    // 昆虫数据
    const insectsList = [
        { id: 1, name: 'Fly', src: 'http://pngimg.com/uploads/fly/fly_PNG3946.png' },
        {
            id: 2,
            name: 'Mosquito',
            src: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
        },
        { id: 3, name: 'Spider', src: 'http://pngimg.com/uploads/spider/spider_PNG12.png' },
        { id: 4, name: 'Roach', src: 'http://pngimg.com/uploads/roach/roach_PNG12163.png' },
    ]

    // 格式化时间
    const formattedTime = computed(() => {
        const minutes = Math.floor(time.value / 60)
            .toString()
            .padStart(2, '0')
        const seconds = (time.value % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    })

    // 选择昆虫
    function selectInsect(insect) {
        selectedInsect.value = insect
        currentScreen.value = 'game'
        startGame()
    }

    // 开始游戏
    function startGame() {
        // 重置游戏状态
        score.value = 0
        time.value = 0
        messageVisible.value = false
        activeInsects.value = []

        // 启动计时器
        gameTimer.value = setInterval(() => time.value++, 1000)

        // 创建初始昆虫
        setTimeout(createInsect, 1000)
    }

    // 创建昆虫
    function createInsect() {
        if (!selectedInsect.value) return

        // 随机位置 (边界留出50px)
        const x = Math.random() * (window.innerWidth - 100) + 50
        const y = Math.random() * (window.innerHeight - 100) + 50
        const rotation = Math.random() * 360

        activeInsects.value.push({
            x,
            y,
            rotation,
            caught: false,
        })

        // 设置下一个昆虫出现时间
        insectTimer.value = setTimeout(createInsect, 1000 + Math.random() * 500)
    }

    // 捕捉昆虫
    function catchInsect(index) {
        // 标记为已捕捉
        activeInsects.value[index].caught = true

        // 增加分数
        score.value++

        // 分数超过19显示消息
        if (score.value > 19) {
            messageVisible.value = true
        }

        // 2秒后移除昆虫
        setTimeout(() => {
            activeInsects.value.splice(index, 1)
        }, 200)

        // 再添加一个新昆虫
        setTimeout(createInsect, 500)
    }

    // 图片加载错误处理
    function handleImageError(event) {
        event.target.src = 'https://via.placeholder.com/100?text=No+Image'
    }

    // 清理定时器
    onBeforeUnmount(() => {
        if (gameTimer.value) clearInterval(gameTimer.value)
        if (insectTimer.value) clearTimeout(insectTimer.value)
    })
</script>

<style scoped></style>
