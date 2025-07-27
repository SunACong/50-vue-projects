<template>
    <div
        class="font-poppins flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-gray-800">
        <h1
            class="mb-6 text-center text-[clamp(5rem,15vw,10rem)] font-light text-purple-400 opacity-40">
            todos
        </h1>

        <form @submit.prevent="addTodo" class="w-full max-w-md shadow-lg">
            <input
                v-model="newTodoText"
                type="text"
                placeholder="Enter your todo"
                autocomplete="off"
                class="w-full border-none p-4 text-2xl focus:ring-2 focus:ring-purple-400 focus:outline-none" />

            <ul class="divide-y divide-gray-100 bg-white">
                <li
                    v-for="(todo, index) in todos"
                    :key="index"
                    @click="toggleTodo(index)"
                    @contextmenu.prevent="deleteTodo(index)"
                    class="cursor-pointer p-4 text-xl transition-colors hover:bg-gray-50"
                    :class="{ 'text-gray-400 line-through': todo.completed }">
                    {{ todo.text }}
                </li>
            </ul>
        </form>

        <small class="mt-8 text-center text-gray-500">
            Left click to toggle completed.
            <br />
            Right click to delete todo
        </small>
    </div>
</template>

<script setup>
    import { ref, watch, onMounted } from 'vue'

    // 响应式数据
    const newTodoText = ref('')
    const todos = ref([])

    // 从localStorage加载待办事项
    onMounted(() => {
        const savedTodos = localStorage.getItem('todos')
        if (savedTodos) {
            todos.value = JSON.parse(savedTodos)
        }
    })

    // 添加待办事项
    const addTodo = () => {
        if (newTodoText.value.trim()) {
            todos.value.push({
                text: newTodoText.value.trim(),
                completed: false,
            })
            newTodoText.value = ''
        }
    }

    // 切换待办事项完成状态
    const toggleTodo = (index) => {
        todos.value[index].completed = !todos.value[index].completed
    }

    // 删除待办事项
    const deleteTodo = (index) => {
        todos.value.splice(index, 1)
    }

    // 监听todos变化，保存到localStorage
    watch(
        todos,
        (newTodos) => {
            localStorage.setItem('todos', JSON.stringify(newTodos))
        },
        { deep: true }
    )
</script>

<style scoped></style>
