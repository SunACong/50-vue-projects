<template>
    <div class="flex h-screen items-center justify-center bg-[#2c3e50]">
        <div class="relative h-20 w-20">
            <!-- 容器A，初始0度 -->
            <div class="absolute top-0 left-0 rotate-0">
                <div
                    class="h-0 w-0 animate-[rotate_2s_linear_infinite_0.5s] border-[50px] border-transparent border-b-white"></div>
            </div>

            <!-- 容器B，初始90度 -->
            <div class="absolute top-0 left-0 rotate-90">
                <div
                    class="h-0 w-0 animate-[rotate_2s_linear_infinite] border-[50px] border-transparent border-b-white"></div>
            </div>
        </div>
    </div>
</template>

<style>
    @keyframes rotate {
        0%,
        25% {
            transform: rotate(0deg);
        }
        50%,
        75% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
