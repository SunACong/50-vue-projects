<template>
    <section class="max-w-8xl mx-auto">
        <router-view v-if="$route.path !== '/'"></router-view>
        <template v-else>
            <Navbar />
            <Home />
            <Projects />
        </template>
    </section>
</template>

<script setup>
    import Navbar from './sections/Navbar.vue'
    import Home from './sections/Home.vue'
    import Projects from './sections/Projects.vue'
</script>
