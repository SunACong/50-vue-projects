<template>
    <div
        class="m-0 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 font-sans">
        <h2 class="absolute top-5 font-medium text-gray-700">Custom Range Slider</h2>

        <div class="relative mt-10">
            <input
                type="range"
                min="0"
                max="100"
                v-model="sliderValue"
                @input="handleSliderInput"
                class="relative z-10 h-3 w-[300px] cursor-pointer appearance-none rounded-md bg-purple-500 outline-none"
                :style="sliderStyles" />
            <label
                :style="labelStyle"
                class="absolute z-0 w-[80px] rounded-md bg-white py-1.5 text-center text-gray-700 shadow-md transition-all duration-300">
                {{ sliderValue }}
            </label>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted } from 'vue'

    // 响应式状态管理
    const sliderValue = ref(50)
    const labelStyle = reactive({
        left: '110px',
        top: '-30px', // 向上调整5px避免遮挡
    })
    const sliderStyles = reactive({})

    // 初始化滑块样式
    onMounted(() => {
        // 应用滑块样式（模拟原生CSS效果）
        sliderStyles.webkitAppearance = 'none'
        sliderStyles.mozAppearance = 'none'
        sliderStyles.appearance = 'none'
    })

    // 处理滑块输入事件
    const handleSliderInput = (e) => {
        const value = +e.target.value
        const range = e.target

        // 计算滑块和标签宽度
        const rangeWidth = getComputedStyle(range).width
        const label = e.target.nextElementSibling
        const labelWidth = getComputedStyle(label).width

        const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
        const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

        const max = +range.max
        const min = +range.min

        // 计算标签位置
        const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10)

        labelStyle.left = `${left}px`
        sliderValue.value = value
    }

    // 数值范围转换函数
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
</script>
