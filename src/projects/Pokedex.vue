<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-200 to-gray-100 p-4 font-sans">
        <h1 class="mb-8 text-4xl font-bold tracking-wider text-gray-800">Pokedex</h1>
        <div class="mx-auto flex max-w-6xl flex-wrap justify-center" id="poke-container">
            <!-- Pokemon Card -->
            <div
                v-for="pokemon in pokemons"
                :key="pokemon.id"
                class="relative m-3 rounded-lg p-4 text-center shadow-md transition-transform hover:scale-105"
                :style="{ backgroundColor: pokemon.color }"
                @mouseenter="showDetails = pokemon.id"
                @mouseleave="showDetails = null">
                <div
                    class="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white/60">
                    <img
                        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
                        :alt="pokemon.name"
                        class="mt-5 max-w-[90%]" />
                </div>
                <div class="mt-4">
                    <span class="rounded-full bg-black/10 px-2 py-1 text-xs">
                        #{{ pokemon.id.toString().padStart(3, '0') }}
                    </span>
                    <h3 class="mt-2 mb-1 text-xl font-bold capitalize">{{ pokemon.name }}</h3>
                    <small class="text-sm text-gray-600">
                        Type:
                        <span class="capitalize">{{ pokemon.type }}</span>
                    </small>
                </div>
                <div
                    v-if="showDetails === pokemon.id"
                    class="absolute top-0 right-0 bottom-0 left-0 overflow-y-auto rounded-lg bg-white/90 p-4">
                    <h3 class="mb-2 text-xl font-bold">{{ pokemon.name }}</h3>
                    <p>
                        <strong>ID:</strong>
                        #{{ pokemon.id.toString().padStart(3, '0') }}
                    </p>
                    <p>
                        <strong>Type:</strong>
                        <span class="capitalize">{{ pokemon.type }}</span>
                    </p>
                    <p>
                        <strong>Height:</strong>
                        {{ pokemon.height / 10 }} m
                    </p>
                    <p>
                        <strong>Weight:</strong>
                        {{ pokemon.weight / 10 }} kg
                    </p>
                    <p>
                        <strong>Abilities:</strong>
                        {{ pokemon.abilities.map((a) => a.ability.name).join(', ') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const pokemons = ref([])
    const pokemon_count = 150
    const showDetails = ref(null)

    // 宝可梦类型颜色映射
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
    }

    const main_types = Object.keys(colors)

    // 获取宝可梦数据
    const fetchPokemons = async () => {
        for (let i = 1; i <= pokemon_count; i++) {
            await getPokemon(i)
        }
    }

    const getPokemon = async (id) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const res = await fetch(url)
            const data = await res.json()
            createPokemonCard(data)
        } catch (error) {
            console.error('Error fetching Pokemon data:', error)
        }
    }

    // 处理宝可梦数据并添加到响应式数组
    const createPokemonCard = (pokemon) => {
        const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
        const poke_types = pokemon.types.map((type) => type.type.name)
        const type = main_types.find((type) => poke_types.indexOf(type) > -1)
        const color = colors[type]

        pokemons.value.push({
            id: pokemon.id,
            name: name,
            type: type,
            color: color,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
        })
    }

    // 组件挂载时获取数据
    onMounted(() => {
        fetchPokemons()
    })
</script>

<style scoped>
    /* 所有样式均通过Tailwind CSS原子类实现，此处留空 */
</style>
