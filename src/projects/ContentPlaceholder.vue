<template>
    <div class="flex h-screen items-center justify-center bg-gray-100">
        <div class="w-[350px] overflow-hidden rounded-xl bg-white shadow-lg">
            <!-- 图片头部 -->
            <div v-if="!loaded" class="h-[200px] w-full animate-pulse bg-gray-300" />
            <img v-else :src="data.headerImg" class="h-[200px] w-full object-cover" />

            <!-- 内容区域 -->
            <div class="space-y-4 p-6">
                <!-- 标题 -->
                <div v-if="!loaded" class="h-[20px] w-3/4 animate-pulse rounded bg-gray-300" />
                <h3 v-else class="text-xl font-bold text-gray-800">
                    {{ data.title }}
                </h3>

                <!-- 摘要 -->
                <div v-if="!loaded" class="space-y-2">
                    <div class="h-[10px] w-full animate-pulse rounded bg-gray-300"></div>
                    <div class="h-[10px] w-5/6 animate-pulse rounded bg-gray-300"></div>
                    <div class="h-[10px] w-2/3 animate-pulse rounded bg-gray-300"></div>
                </div>
                <p v-else class="text-gray-600">{{ data.excerpt }}</p>

                <!-- 作者 -->
                <div class="flex items-center">
                    <div
                        v-if="!loaded"
                        class="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
                    <img
                        v-else
                        :src="data.profileImg"
                        class="h-10 w-10 rounded-full object-cover" />
                    <div class="ml-3">
                        <div
                            v-if="!loaded"
                            class="h-[10px] w-[100px] animate-pulse rounded bg-gray-300"></div>
                        <template v-else>
                            <strong class="text-gray-800">{{ data.name }}</strong>
                            <small class="text-gray-500">{{ data.date }}</small>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const loaded = ref(false)

    const data = {
        headerImg:
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=2102&q=80',
        title: 'Lorem ipsum dolor sit amet',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis.',
        profileImg: 'https://randomuser.me/api/portraits/men/45.jpg',
        name: 'John Doe',
        date: 'Oct 08, 2020',
    }

    onMounted(() => {
        setTimeout(() => {
            loaded.value = true
        }, 2500)
    })
</script>
