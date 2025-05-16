<template>
    <div class="flex flex-col items-center justify-center gap-4 text-white">
        <h1 class="head-text">Scroll to see the animation</h1>
        <div
            v-for="(item, index) in contentList"
            :key="item.id"
            :ref="(el) => (boxRefs[index] = el)"
            :class="[
                'my-auto flex h-56 w-sm items-center justify-center rounded-2xl bg-white font-mono text-3xl font-bold text-black transition-all duration-700 ease-in md:w-md lg:w-lg',
                index % 2 === 0 ? '-translate-x-full' : 'translate-x-full',
                item.visible
                    ? 'nth-of-type-[2n]:translate-x-0 nth-of-type-[2n+1]:translate-x-0'
                    : 'nth-of-type-[2n]:translate-x-full nth-of-type-[2n+1]:-translate-x-full',
            ]">
            <div>{{ item.title }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, reactive } from 'vue'

    const boxRefs = reactive([])

    const contentList = ref([
        {
            id: 1,
            title: 'Content 1',
            visible: false,
        },
        {
            id: 2,
            title: 'Content 2',
            visible: false,
        },
        {
            id: 3,
            title: 'Content 3',
            visible: false,
        },
        {
            id: 4,
            title: 'Content 4',
            visible: false,
        },
        {
            id: 5,
            title: 'Content 5',
            visible: false,
        },
        {
            id: 6,
            title: 'Content 6',
            visible: false,
        },
        {
            id: 7,
            title: 'Content 7',
            visible: false,
        },
        {
            id: 8,
            title: 'Content 8',
            visible: false,
        },
    ])

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 找到对应的内容项
                    const index = boxRefs.findIndex((ref) => ref === entry.target)
                    if (index !== -1) {
                        // 根据元素是否在视口内设置可见状态
                        contentList.value[index].visible = entry.isIntersecting
                    }
                })
            },
            { threshold: 0.1 }
        )

        // 为每个盒子添加观察
        boxRefs.forEach((box) => {
            if (box) observer.observe(box)
        })
    })
</script>
