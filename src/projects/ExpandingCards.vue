<template>
    <div class="flex min-h-screen justify-center p-20">
        <div
            @click="current = item.id"
            :class="[
                'relative m-2 flex-1/12 cursor-pointer rounded-[4vw] bg-cover bg-center bg-no-repeat font-mono text-2xl text-white transition-all duration-500 ease-in-out',
                item.className,
                current === item.id ? 'flex-2/3' : 'flex-1/12',
            ]"
            v-for="item in imagList"
            :key="item.id">
            <h3
                :class="[
                    'absolute bottom-5 left-15 transition-all duration-500 ease-in-out',
                    current === item.id ? 'opacity-100' : 'opacity-0',
                ]">
                {{ item.title }}
            </h3>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const current = ref(1)

    const imagList = [
        {
            id: 1,
            className:
                'bg-[url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]',
            title: 'Explore The World',
        },
        {
            id: 2,
            className:
                'bg-[url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]',
            title: 'Wild Forest',
        },
        {
            id: 3,
            className:
                'bg-[url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)]',
            title: 'Sunny Beach',
        },
        {
            id: 4,
            className:
                'bg-[url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=8)]',
            title: 'City on Winterg',
        },
        {
            id: 5,
            className:
                'bg-[url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]',
            title: 'Mountains - Clouds',
        },
    ]
</script>
