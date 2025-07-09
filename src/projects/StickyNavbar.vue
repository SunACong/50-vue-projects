<template>
    <div>
        <!-- 导航栏 -->
        <nav
            :class="[
                'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
                isSticky ? 'bg-white shadow-md' : 'bg-zinc-900',
            ]">
            <div
                :class="[
                    'container mx-auto flex items-center justify-between transition-all duration-300',
                    isSticky ? 'py-2' : 'py-5',
                ]">
                <h1 class="text-xl font-bold">
                    <a href="#" :class="isSticky ? 'text-black' : 'text-white'">My Website</a>
                </h1>
                <ul class="flex gap-4">
                    <li><a href="#" class="nav-link" :class="linkClass('Home')">Home</a></li>
                    <li><a href="#" class="nav-link" :class="linkClass('About')">About</a></li>
                    <li>
                        <a href="#" class="nav-link" :class="linkClass('Services')">Services</a>
                    </li>
                    <li><a href="#" class="nav-link" :class="linkClass('Contact')">Contact</a></li>
                </ul>
            </div>
        </nav>

        <!-- Hero 区域 -->
        <section
            class="relative z-10 flex h-screen items-center justify-center bg-cover bg-center text-center text-white">
            <div class="bg-opacity-50 absolute inset-0 z-0 bg-black"></div>
            <div class="relative z-10 px-4">
                <h1 class="-mt-5 mb-4 text-4xl font-bold md:text-5xl">Welcome To My Website</h1>
                <p class="text-lg tracking-wide">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?
                </p>
            </div>
        </section>

        <!-- 内容区域 -->
        <section class="container mx-auto space-y-6 px-4 py-10">
            <h2 class="mt-4 text-2xl font-semibold">Content One</h2>
            <p class="leading-7 tracking-wide text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates
                eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque
                perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos
                tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis
                aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas?
                Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero
                laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem
                voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum
                sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!
            </p>

            <h3 class="text-xl font-semibold">Content Two</h3>
            <p class="leading-7 tracking-wide text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum
                possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis
                distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima
                beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora
                doloremque quae iste aperiam hic cumque repellat?
            </p>
        </section>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isSticky = ref(false)
    const activePage = ref('Home') // 也可以绑定路由实现高亮

    const handleScroll = () => {
        isSticky.value = window.scrollY > 100
    }

    const linkClass = (page) => {
        return [
            'transition-colors duration-300 px-3 py-1',
            isSticky.value ? 'text-black hover:text-red-600' : 'text-white hover:text-red-400',
            activePage.value === page ? 'text-red-600 font-bold' : '',
        ]
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>
