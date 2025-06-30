<template>
    <div
        :class="[
            'min-h-screen',
            theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900',
            'flex flex-col items-center justify-center',
        ]">
        <!-- 主题切换按钮 -->
        <button
            @click="toggleTheme"
            :class="[
                'mb-8 rounded-md p-2',
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200',
            ]">
            {{ theme === 'dark' ? '切换至浅色主题' : '切换至深色主题' }}
        </button>

        <!-- 时钟容器 -->
        <div class="relative h-64 w-64">
            <!-- 表盘 -->
            <div
                :class="[
                    'absolute inset-0 rounded-full',
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white',
                ]">
                <!-- 时针 -->
                <div
                    class="absolute top-1/2 left-1/2 h-1 w-1/4 origin-left rounded-full bg-current"
                    :style="{
                        transform: `translateY(-50%) rotate(${hoursRotation - 90}deg)`,
                    }"></div>
                <!-- 分针 -->
                <div
                    class="absolute top-1/2 left-1/2 h-1 w-2/5 origin-left rounded-full bg-current"
                    :style="{
                        transform: `translateY(-50%) rotate(${minutesRotation - 90}deg)`,
                    }"></div>
                <!-- 秒针 -->
                <div
                    class="absolute top-1/2 left-1/2 h-px w-1/2 origin-left rounded-full bg-red-500"
                    :style="{
                        transform: `translateY(-50%) rotate(${secondsRotation - 90}deg)`,
                    }"></div>
                <!-- 中心圆点 -->
                <div
                    :class="[
                        'absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full',
                        theme === 'dark' ? 'bg-white' : 'bg-gray-900',
                    ]"></div>
            </div>
        </div>

        <!-- 日期与星期 -->
        <div
            :class="[
                'mt-8 text-xl font-semibold',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-800',
            ]">
            {{ currentDate }} {{ currentDay }}
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    // 主题切换
    const theme = ref('dark')
    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    // 时间状态
    const hoursRotation = ref(0)
    const minutesRotation = ref(0)
    const secondsRotation = ref(0)
    const currentDate = ref('')
    const currentDay = ref('')

    // 更新时间函数
    const updateTime = () => {
        const now = new Date()

        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()

        const hoursForClock = hours % 12
        hoursRotation.value = hoursForClock * 30 + minutes * 0.5
        minutesRotation.value = minutes * 6 + seconds * 0.1
        secondsRotation.value = seconds * 6

        console.log(hoursRotation.value, minutesRotation.value, secondsRotation.value)

        const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        currentDate.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
            now.getDate()
        ).padStart(2, '0')}`
        currentDay.value = days[now.getDay()]
    }

    // 启动定时器
    let interval = null
    onMounted(() => {
        updateTime()
        interval = setInterval(updateTime, 1000)
    })

    // 清除定时器
    onUnmounted(() => {
        clearInterval(interval)
    })
</script>
