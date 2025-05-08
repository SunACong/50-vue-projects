<template>
    <section class="flex min-h-screen w-full flex-col" id="Home">
        <div
            class="absolute inset-0 z-0 bg-[url(@/assets/showcase-bg.png)] bg-center bg-no-repeat opacity-20" />
        <div
            class="c-space z-1 mx-auto mt-30 flex w-full flex-col gap-y-20 text-center font-mono font-medium text-gray-200 sm:mt-60">
            <p class="text-2xl sm:text-3xl">
                50 天 50 个项目
                <span class="waving-hand">👋</span>
            </p>
            <p class="head-text">50 个独特的迷你项目来提升你的 HTML、CSS 和 JavaScript 技能</p>
            <button class="btn border-2 font-mono">🚀让我们开始吧！🚀</button>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
    .waving-hand {
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
    }

    @keyframes wave-animation {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(14deg);
        }
        20% {
            transform: rotate(-8deg);
        }
        30% {
            transform: rotate(14deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(10deg);
        }
        60% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
