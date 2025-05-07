<template>
    <section class="c-space" id="projects">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div v-for="item in projectList" :key="item.id" class="text-base text-white">
                <img :src="item.image" :alt="item.title" />
                <!-- <router-link :to="item.link">{{ item.title }}</router-link> -->
            </div>
        </div>
    </section>
</template>

<script setup>
    import { projectList } from '../constants'
</script>
