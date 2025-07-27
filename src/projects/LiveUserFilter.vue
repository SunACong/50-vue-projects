<template>
    <div
        class="flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 font-sans">
        <div class="w-72 overflow-hidden rounded-lg bg-white shadow-md">
            <!-- 头部搜索区域 -->
            <div class="bg-blue-600 p-6 text-white">
                <h4 class="mb-1 text-xl font-bold">Live User Filter</h4>
                <small class="opacity-80">Search by name and/or location</small>
                <input
                    v-model="searchTerm"
                    @input="filterUsers"
                    class="mt-3 w-full rounded-full bg-blue-800/50 px-4 py-2 text-sm text-white focus:outline-none"
                    placeholder="Search" />
            </div>

            <!-- 用户列表区域 -->
            <ul class="max-h-96 overflow-y-auto">
                <!-- 加载状态 -->
                <li v-if="isLoading" class="p-6 text-center">
                    <h3>Loading...</h3>
                </li>

                <!-- 过滤后的用户列表 -->
                <li
                    v-for="user in filteredUsers"
                    :key="user.login.uuid"
                    class="flex items-center border-b border-gray-100 p-4">
                    <img
                        :src="user.picture.large"
                        :alt="`${user.name.first} ${user.name.last}`"
                        class="h-12 w-12 rounded-full object-cover" />
                    <div class="ml-3">
                        <h4 class="font-medium text-gray-900">
                            {{ user.name.first }} {{ user.name.last }}
                        </h4>
                        <p class="text-xs text-gray-500">
                            {{ user.location.city }}, {{ user.location.country }}
                        </p>
                    </div>
                </li>

                <!-- 无结果状态 -->
                <li
                    v-if="!isLoading && filteredUsers.length === 0"
                    class="p-6 text-center text-gray-500">
                    No users found
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'

    // 响应式状态
    const users = ref([])
    const searchTerm = ref('')
    const isLoading = ref(true)

    // 获取用户数据
    const fetchUsers = async () => {
        try {
            isLoading.value = true
            const response = await fetch('https://randomuser.me/api?results=50')
            const data = await response.json()
            users.value = data.results
        } catch (error) {
            console.error('Error fetching users:', error)
        } finally {
            isLoading.value = false
        }
    }

    // 过滤用户数据
    const filteredUsers = computed(() => {
        if (!searchTerm.value) return users.value
        const term = searchTerm.value.toLowerCase()
        return users.value.filter((user) => {
            const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
            const location = `${user.location.city} ${user.location.country}`.toLowerCase()
            return fullName.includes(term) || location.includes(term)
        })
    })

    // 组件挂载时获取数据
    onMounted(() => {
        fetchUsers()
    })

    // 暴露给模板的方法
    const filterUsers = () => {} // 仅为了模板中绑定，实际过滤通过computed完成
</script>

<style scoped>
    /* 完全通过Tailwind CSS类实现样式，无自定义CSS */
</style>
