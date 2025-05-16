<template>
    <div
        :class="[
            'origin-top-left bg-white transition-all duration-500 ease-in-out',
            turnRotate ? '-rotate-30' : 'rotate-0',
        ]">
        <div
            :class="[
                'fixed -top-20 -left-20 transition-all duration-700 ease-in-out',
                turnRotate ? '-rotate-[65deg]' : 'rotate-0',
            ]"
            @click="turnRotate = !turnRotate">
            <div class="h-40 w-40 rounded-full bg-fuchsia-300 text-white">
                <button class="absolute right-10 bottom-7 text-3xl">≡</button>
                <button class="absolute bottom-8 left-8 text-3xl">×</button>
            </div>
        </div>

        <div class="mx-28 flex flex-col items-start gap-2 px-50 pt-30">
            <h1 class="head-text">Amazing Article</h1>
            <small class="">Florin Pop</small>
            <p class="base-text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione
                dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore
                modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos.
                Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime
                dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore
                cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
                sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum
                soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur
                perferendis consequatur nobis exercitationem molestias fugiat commodi omnis.
                Asperiores quia tenetur nemo ipsa.
            </p>

            <h3 class="sub-text mt-4">My Dog</h3>
            <img
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                alt="doggy" />
            <p class="base-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum
                quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa
                veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium?
                Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
                temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo
                provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique
                laborum odio, magnam esse. Aperiam?
            </p>
        </div>
    </div>

    <div>
        <nav
            :class="[
                'fixed bottom-40 left-0 z-10 text-white transition-all duration-500 ease-in-out',
                turnRotate ? 'translate-x-0' : '-translate-x-[200px]',
            ]">
            <ul class="list-none pl-8">
                <li class="my-10 uppercase transition-all duration-500 ease-in">
                    🏠
                    <a href="#">Home</a>
                </li>
                <li class="my-10 translate-x-4/12 uppercase transition-all duration-500 ease-in">
                    👋
                    <a href="#">About</a>
                </li>
                <li class="my-10 translate-x-8/12 uppercase transition-all duration-500 ease-in">
                    📧
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const turnRotate = ref(false)
</script>
