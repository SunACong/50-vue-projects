<template>
    <div class="hoverboard-container">
        <div class="hoverboard">
            <div
                v-for="(item, index) in squares"
                :key="index"
                class="square"
                @mouseenter="changeColor($event)"
                @mouseleave="resetColor($event)"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    // 生成 20 * 10 = 200 个小正方形
    const squares = computed(() => Array.from({ length: 30 * 3 }, (_, i) => i))

    // 生成随机颜色
    const getRandomColor = () => {
        const hexChars = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += hexChars[Math.floor(Math.random() * 16)]
        }
        return color
    }

    // 改变颜色
    const changeColor = (e) => {
        const color = getRandomColor()
        e.target.style.backgroundColor = color
        e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    // 重置颜色
    const resetColor = (e) => {
        setTimeout(() => {
            e.target.style.backgroundColor = '#1d1d1d'
            e.target.style.boxShadow = '0 0 2px #000'
        }, 500)
    }
</script>

<style scoped>
    .hoverboard-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .hoverboard {
        display: flex;
        flex-wrap: wrap;
        /* 移除多余的对齐方式 */
        justify-content: flex-start;
        align-items: flex-start;
        /* 计算宽度，每个方块 15px 宽，加上 2px 外边距，一行 10 个方块 */
        width: calc((15px + 2px * 2) * 10);
        overflow: hidden;
    }

    .square {
        width: 15px;
        height: 15px;
        background-color: #1d1d1d;
        box-shadow: 0 0 2px #000;
        margin: 2px;
        transition: all 0.5s ease;
    }
</style>
