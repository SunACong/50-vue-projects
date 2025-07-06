<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-900">
        <div class="flex flex-col items-center">
            <!-- 🎨 画板区域 -->
            <canvas
                ref="canvasRef"
                class="aspect-square w-[800px] border-2 border-gray-300 bg-white"
                @mousedown="startDrawing"
                @mousemove="draw"
                @mouseup="stopDrawing"
                @mouseleave="stopDrawing"
                @contextmenu.prevent></canvas>

            <!-- 🛠️ 工具栏 -->
            <div
                class="mt-4 flex w-[800px] items-center justify-between rounded-lg bg-gray-800 p-3">
                <!-- 粗细调节 -->
                <div class="flex items-center">
                    <button
                        @click="decreaseBrushSize"
                        class="rounded p-2 text-white hover:bg-gray-700">
                        -
                    </button>
                    <span class="mx-3 text-white">{{ brushSize }}</span>
                    <button
                        @click="increaseBrushSize"
                        class="rounded p-2 text-white hover:bg-gray-700">
                        +
                    </button>
                </div>

                <!-- 🎨 颜色选择 -->
                <input type="color" v-model="brushColor" class="h-10 w-10 cursor-pointer" />

                <!-- 清空画布 -->
                <button
                    @click="clearCanvas"
                    class="rounded bg-red-600 p-2 text-white hover:bg-red-700">
                    清空
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    // 🖼️ 画布引用
    const canvasRef = ref(null)
    // ✍️ 是否正在绘图
    const isDrawing = ref(false)
    // 画笔粗细 & 颜色
    const brushSize = ref(5)
    const brushColor = ref('#000000')

    // 上一个坐标
    let lastX = 0
    let lastY = 0
    let ctx = null

    // 初始化画布
    onMounted(() => {
        const canvas = canvasRef.value
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        ctx = canvas.getContext('2d')
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
    })

    // 开始绘制
    const startDrawing = (e) => {
        if (e.button === 0) {
            isDrawing.value = true
            lastX = e.offsetX
            lastY = e.offsetY
        }
    }

    // 绘制中
    const draw = (e) => {
        if (!isDrawing.value) return

        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.strokeStyle = brushColor.value
        ctx.lineWidth = brushSize.value
        ctx.stroke()

        lastX = e.offsetX
        lastY = e.offsetY
    }

    // 停止绘制
    const stopDrawing = () => {
        isDrawing.value = false
    }

    // 控制画笔大小
    const increaseBrushSize = () => {
        if (brushSize.value < 50) brushSize.value += 1
    }
    const decreaseBrushSize = () => {
        if (brushSize.value > 1) brushSize.value -= 1
    }

    // 清除画布
    const clearCanvas = () => {
        const canvas = canvasRef.value
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
</script>
