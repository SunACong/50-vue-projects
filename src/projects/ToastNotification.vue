<template>
    <div class="flex h-screen items-center justify-center">
        <button
            class="rounded-md bg-white px-4 py-2 font-mono text-black shadow hover:bg-gray-100"
            @click="showNotification">
            Show Notification
        </button>

        <!-- 通知容器 -->
        <div class="fixed right-4 bottom-4 flex flex-col items-end space-y-6">
            <transition-group
                tag="div"
                enter-active-class="transition transform ease-out duration-300"
                enter-from-class="opacity-0 translate-y-6"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition transform ease-in duration-300"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-6">
                <div
                    v-for="note in notifications"
                    :key="note.id"
                    class="mt-4 min-w-[220px] rounded bg-white px-4 py-3 text-sm text-gray-800 shadow-lg ring-1 ring-gray-200">
                    {{ note.text }}
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const notifications = ref([])
    let idCounter = 0

    function showNotification() {
        const id = idCounter++
        notifications.value.push({
            id,
            text: `🔔 Notification #${id}`,
        })

        // 3 秒后自动移除
        setTimeout(() => {
            notifications.value = notifications.value.filter((n) => n.id !== id)
        }, 3000)
    }
</script>
