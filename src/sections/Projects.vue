<template>
    <section class="c-space" id="projects">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div
                v-for="item in projectList"
                :key="item.id"
                class="relative overflow-hidden rounded-lg">
                <div>
                    <img :src="item.image" :alt="item.title" />
                </div>

                <div
                    class="absolute inset-0 flex flex-col items-center justify-center bg-black/70 font-mono opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                    <h3 class="mb-4 text-xl font-bold text-white">{{ item.title }}</h3>
                    <a
                        :href="item.link"
                        class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { projectList } from '../constants'
</script>

<style scoped></style>
