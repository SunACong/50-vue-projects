<template>
    <section class="max-w-8xl mx-auto">
        <Navbar />
        <Home />
        <Projects />
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import Navbar from './sections/Navbar.vue'
    import Home from './sections/Home.vue'
    import Projects from './sections/Projects.vue'

    const feature = ref()
</script>
