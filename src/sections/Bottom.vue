<template>
    <div class="bg-gray-900 px-6 py-12 text-white" id="Bottom">
        <!-- About the Course -->
        <section class="mx-auto mb-20 max-w-4xl text-center">
            <h2 class="mb-4 text-3xl font-bold">About The Course</h2>
            <p class="mb-6 leading-relaxed">
                This is a pure, practical and fun
                <span class="font-bold text-yellow-400">project based</span>
                course. Every project is different and while we use some repeated practices, they
                are each meant to teach you something new. It is recommended that you do one project
                per day, however you can do them as you please. By the end, you will have a stronger
                foundation in JS as well as HTML/CSS and should be able to move on and build your
                own projects.
            </p>
            <a
                href="#"
                class="inline-block rounded border border-white px-6 py-2 transition hover:bg-white hover:text-gray-900">
                Github Repo For All Projects
            </a>
        </section>

        <!-- What You Should Know -->
        <section class="mb-20 rounded-md bg-purple-900 py-12 text-center">
            <h2 class="mb-4 text-3xl font-bold">What You Should Know</h2>
            <p class="mx-auto mb-6 max-w-2xl">
                A very basic understanding of HTML, CSS & JavaScript is all that you need to know
                before taking this course. Things like common HTML5 tags, basic styling, JS
                variables, conditionals, etc
            </p>
            <div class="flex justify-center gap-6">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    class="h-16 w-16" />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JS"
                    class="h-16 w-16" />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    class="h-16 w-16" />
            </div>
        </section>

        <!-- Co-authors -->
        <section class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
            <!-- Brad -->
            <div class="text-center">
                <img
                    src="https://avatars.githubusercontent.com/u/5550850?v=4"
                    alt="Brad Traversy"
                    class="mx-auto mb-4 h-24 w-24 rounded-full" />
                <h3 class="text-xl font-bold">Co-author, Brad Traversy</h3>
                <p class="mt-2 text-sm leading-relaxed">
                    Brad Traversy has been a freelancer, worked for a company and has run his own
                    business, but he discovered that his real passion is teaching web development &
                    programming in a simple and understandable way. He now runs the Traversy Media
                    YouTube channel and produces online courses.
                </p>
            </div>

            <!-- Florin -->
            <div class="text-center">
                <img
                    src="https://avatars.githubusercontent.com/u/11304989?v=4"
                    alt="Florin Pop"
                    class="mx-auto mb-4 h-24 w-24 rounded-full" />
                <h3 class="text-xl font-bold">Co-author, Florin Pop</h3>
                <p class="mt-2 text-sm leading-relaxed">
                    Florin Pop is a web developer specialized in Frontend Development (CSS,
                    JavaScript) and friend of mine that has helped me create this course. He also
                    has a YouTube Channel and often streams his coding sessions on Twitch.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup>
    // 无需 JS 逻辑，仅展示内容
</script>
