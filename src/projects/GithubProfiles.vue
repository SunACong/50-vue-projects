<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center bg-[#2a2a72] p-4 font-sans text-white">
        <form @submit.prevent="handleSubmit" class="mb-8 w-full max-w-xl">
            <input
                v-model="username"
                type="text"
                placeholder="Search a Github User"
                class="w-full rounded-lg bg-[#4c2885] p-4 text-white shadow-lg placeholder:text-[#bbb] focus:outline-none" />
        </form>

        <!-- 错误卡片 -->
        <div v-if="error" class="max-w-3xl rounded-2xl bg-[#4c2885] p-6 text-center shadow-lg">
            <h1 class="text-xl font-bold">{{ error }}</h1>
        </div>

        <!-- 用户信息卡片 -->
        <div
            v-else-if="user"
            class="flex w-full max-w-3xl flex-col rounded-2xl bg-[#4c2885] p-6 shadow-lg md:flex-row">
            <div class="flex flex-shrink-0 justify-center">
                <img
                    :src="user.avatar_url"
                    :alt="user.name"
                    class="h-36 w-36 rounded-full border-[10px] border-[#2a2a72]" />
            </div>
            <div class="mt-4 ml-0 flex-grow md:mt-0 md:ml-8">
                <h2 class="mb-2 text-2xl font-bold">{{ user.name || user.login }}</h2>
                <p v-if="user.bio" class="mb-4">{{ user.bio }}</p>
                <ul class="mb-4 flex max-w-md justify-between text-sm">
                    <li>
                        {{ user.followers }}
                        <strong class="ml-1">Followers</strong>
                    </li>
                    <li>
                        {{ user.following }}
                        <strong class="ml-1">Following</strong>
                    </li>
                    <li>
                        {{ user.public_repos }}
                        <strong class="ml-1">Repos</strong>
                    </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                    <a
                        v-for="repo in repos.slice(0, 5)"
                        :key="repo.id"
                        :href="repo.html_url"
                        target="_blank"
                        class="inline-block rounded bg-[#212a72] px-2 py-1 text-xs text-white">
                        {{ repo.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const API_URL = 'https://api.github.com/users/'

    const username = ref('')
    const user = ref(null)
    const repos = ref([])
    const error = ref('')

    const getUser = async (name) => {
        try {
            error.value = ''
            const res = await fetch(API_URL + name)
            if (!res.ok) {
                throw new Error('Not Found')
            }
            user.value = await res.json()
            console.log(user.value)

            await getRepos(name)
        } catch (err) {
            error.value = 'No profile with this username'
            user.value = null
            repos.value = []
        }
    }

    const getRepos = async (name) => {
        try {
            const res = await fetch(`${API_URL}${name}/repos?sort=created`)
            if (!res.ok) {
                throw new Error('Repo Fetch Failed')
            }
            repos.value = await res.json()
        } catch (err) {
            error.value = 'Problem fetching repos'
        }
    }

    const handleSubmit = () => {
        const trimmed = username.value.trim()
        if (trimmed) {
            getUser(trimmed)
            username.value = ''
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
    :root {
        font-family: 'Poppins', sans-serif;
    }
</style>
