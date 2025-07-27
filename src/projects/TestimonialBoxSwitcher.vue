<template>
    <div
        class="font-montserrat m-0 flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 p-4">
        <div
            class="relative mx-auto w-full max-w-2xl rounded-lg bg-blue-600 p-8 text-white shadow-md">
            <!-- 进度条 -->
            <div
                class="absolute top-0 left-0 h-1 w-full origin-left bg-white transition-all duration-10000 ease-linear"
                :style="{ width: progress + '%' }"></div>

            <!-- 引用图标 -->
            <div class="absolute text-3xl text-white/30">
                <i class="fas fa-quote-right absolute top-6 left-150"></i>
                <i class="fas fa-quote-left absolute top-6 right-1"></i>
            </div>

            <!-- 推荐文本 -->
            <p class="testimonial mb-6 pt-4 text-justify leading-relaxed">
                {{ currentTestimonial.text }}
            </p>

            <!-- 用户信息 -->
            <div class="user flex items-center justify-center">
                <img
                    :src="currentTestimonial.photo"
                    :alt="currentTestimonial.name"
                    class="user-image mr-4 h-16 w-16 rounded-full object-cover"
                    @error="handleImageError" />
                <div class="user-details text-left">
                    <h4 class="username text-lg font-bold">{{ currentTestimonial.name }}</h4>
                    <p class="role text-white/80">{{ currentTestimonial.position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

    // 默认头像 - 当图片加载失败时使用
    const DEFAULT_AVATAR = 'https://via.placeholder.com/150?text=User'

    // 推荐语数据
    const testimonials = ref([
        {
            name: 'Miyah Myles',
            position: 'Marketing',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
            text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
        },
        {
            name: 'June Cha',
            position: 'Software Engineer',
            photo: 'https://randomuser.me/api/portraits/women/44.jpg',
            text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
        },
        {
            name: 'Iida Niskanen',
            position: 'Data Entry',
            photo: 'https://randomuser.me/api/portraits/women/68.jpg',
            text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
        },
        {
            name: 'Renee Sims',
            position: 'Receptionist',
            photo: 'https://randomuser.me/api/portraits/women/65.jpg',
            text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
        },
        {
            name: 'Jonathan Nunfiez',
            position: 'Graphic Designer',
            photo: 'https://randomuser.me/api/portraits/men/43.jpg',
            text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
        },
    ])

    // 当前推荐语索引
    const currentIndex = ref(0)
    // 进度条百分比
    const progress = ref(0)
    // 定时器ID
    let intervalId = null
    let progressIntervalId = null

    // 当前推荐语
    const currentTestimonial = computed(() => testimonials.value[currentIndex.value])

    // 处理图片加载错误
    const handleImageError = (e) => {
        e.target.src = DEFAULT_AVATAR
    }

    // 更新推荐语
    const updateTestimonial = () => {
        currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
        progress.value = 0 // 重置进度条
    }

    // 启动定时器
    const startTimer = () => {
        // 10秒切换一次推荐语
        intervalId = setInterval(updateTestimonial, 10000)

        // 更新进度条
        progressIntervalId = setInterval(() => {
            progress.value += 0.1 // 每10ms增加0.1%
            if (progress.value >= 100) progress.value = 100
        }, 10)
    }

    // 组件挂载时启动定时器
    onMounted(startTimer)

    // 组件卸载时清除定时器
    onUnmounted(() => {
        clearInterval(intervalId)
        clearInterval(progressIntervalId)
    })

    // 当currentIndex变化时重置进度条动画
    watch(currentIndex, () => {
        progress.value = 0
    })
</script>

<style scoped></style>
