<template>
    <div class="relative h-16 bg-gray-900">
        <input
            type="text"
            class="absolute top-3 right-3 h-10 rounded-2xl bg-gray-600 p-2"
            placeholder="Search" />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-6 p-4">
        <div
            v-for="item in movies"
            :key="item.id"
            class="group relative flex-1/6 overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
            <img :src="IMG_PATH + item.poster_path" alt="" class="h-4/6 w-full object-cover" />
            <div class="p-2">
                <div class="text-lg font-bold">{{ item.title }}</div>
                <div class="text-sm text-gray-500">{{ item.release_date }}</div>
                <div class="text-sm text-gray-500">{{ item.vote_average }}</div>
            </div>
            <!-- 影片概要滑出区域 -->
            <div
                class="absolute right-0 bottom-0 left-0 translate-y-full transform overflow-y-auto bg-white p-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
                <div class="mb-4 font-mono text-2xl">Overview</div>
                <div class="font-mono text-gray-700">
                    {{ item.overview || 'No overview available' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const movies = ref([])
    const searchTerm = ref('')
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const API_URL =
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const SEARCH_API =
        'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

    const getMovies = async (searchTerm = '') => {
        const url = searchTerm ? SEARCH_API + searchTerm : API_URL
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error('Network response was not ok')
            const data = await response.json()
            movies.value = data.results
            console.log(movies.value)
        } catch (error) {
            console.error('Fetch error:', error)
            movies.value = []
        }
    }

    const handleSearch = () => {
        getMovies(searchTerm.value)
    }

    const getClassByRate = (vote) => {
        if (vote >= 8) return 'green'
        else if (vote >= 5) return 'orange'
        else return 'red'
    }

    onMounted(() => getMovies())
</script>
