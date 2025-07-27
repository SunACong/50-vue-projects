<template>
    <div class="flex h-screen flex-col items-center justify-center overflow-hidden bg-gray-100">
        <!-- 魔法按钮 -->
        <button
            @click="isBig = !isBig"
            class="font-poppins fixed top-5 z-50 transform rounded bg-yellow-400 px-5 py-3 text-white shadow-md transition-all duration-200 hover:shadow-lg active:translate-y-1 active:shadow-none">
            Magic 🎩
        </button>

        <!-- 盒子容器 -->
        <div
            :class="[
                'relative flex flex-wrap justify-around transition-all duration-400',
                isBig ? 'h-[600px] w-[600px]' : 'h-[500px] w-[500px]',
            ]">
            <!-- 动态生成盒子 -->
            <div
                v-for="(box, index) in boxes"
                :key="index"
                :class="[
                    'relative h-[125px] w-[125px] transition-all duration-400',
                    isBig ? 'rotate-360' : 'rotate-0',
                ]"
                :style="{
                    backgroundImage: 'url(https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '500px 500px',
                    backgroundPosition: `${box.x}px ${box.y}px`,
                }">
                <!-- 3D效果伪元素通过Tailwind实现 -->
                <div
                    class="absolute top-2 right-[-15px] h-full w-4 skew-y-12 transform bg-yellow-200"></div>
                <div
                    class="absolute bottom-[-15px] left-2 h-4 w-full skew-x-12 transform bg-yellow-400"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    // 响应式状态管理
    const isBig = ref(false)
    const boxes = ref([])

    // 创建盒子数据
    function createBoxes() {
        const boxArray = []
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                boxArray.push({
                    x: -j * 125,
                    y: -i * 125,
                })
            }
        }
        boxes.value = boxArray
    }

    // 组件挂载时创建盒子
    onMounted(() => {
        createBoxes()
    })
</script>

<style scoped>
    /* 完全通过Tailwind CSS类实现样式，无自定义CSS */
</style>
