<template>
    <div class="flex h-screen items-center justify-center gap-20 text-white">
        <div
            class="flex flex-col items-center justify-center gap-2"
            v-for="item in iconList"
            :key="item.id">
            <img :src="item.icon" alt="icon" class="h-20 w-20" />
            <div class="text-3xl font-extrabold">{{ item.count }}</div>
            <div class="font-mono">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, reactive } from 'vue'

    const iconList = reactive([
        {
            id: 1,
            name: 'Twitter Followers',
            count: 0,
            icon: '/src/assets/icon/推特.svg',
            target: 12000,
        },
        {
            id: 2,
            name: 'Facebook Fans',
            count: 0,
            icon: '/src/assets/icon/facebook.svg',
            target: 5000,
        },
        {
            id: 3,
            name: 'YouTube Subscribers',
            count: 0,
            icon: '/src/assets/icon/油管.svg',
            target: 7000,
        },
    ])

    onMounted(() => {
        const totalSteps = 100 // 总步数
        const intervalDuration = 10 // 每次间隔时间（毫秒）
        let currentStep = 0

        const interval = setInterval(() => {
            currentStep++
            iconList.forEach((item) => {
                const stepValue = Math.ceil(item.target / totalSteps) // 每步增长的值
                item.count = Math.min(item.count + stepValue, item.target) // 确保不超过目标值
            })

            if (currentStep >= totalSteps) {
                clearInterval(interval)
            }
        }, intervalDuration)

        onUnmounted(() => {
            clearInterval(interval)
        })
    })
</script>