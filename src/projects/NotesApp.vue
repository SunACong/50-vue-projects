<template>
    <!-- 顶部固定的添加按钮 -->
    <div class="fixed top-4 right-4 z-50">
        <button
            @click="addNote"
            class="rounded bg-lime-500 px-4 py-2 text-white shadow transition hover:bg-lime-600 active:scale-95">
            <i class="fas fa-plus mr-2"></i>
            添加笔记
        </button>
    </div>

    <div class="flex flex-wrap p-16">
        <div
            v-for="(note, index) in notes"
            :key="index"
            class="m-6 flex h-[400px] w-[400px] flex-col overflow-y-auto bg-white shadow-lg">
            <!-- 工具栏 -->
            <div class="flex justify-end bg-lime-500 p-2">
                <button class="ml-2 text-lg text-white" @click="toggleEdit(index)">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="ml-2 text-lg text-white" @click="deleteNote(index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

            <div
                v-if="!note.editing"
                class="prose prose-sm max-w-none p-5"
                v-html="renderMarkdown(note.text)"></div>

            <textarea
                v-else
                v-model="note.text"
                @input="updateNote(index)"
                class="w-full flex-1 resize-none border-none p-5 font-sans text-base outline-none"></textarea>
        </div>
    </div>
</template>

<script setup>
    import { reactive, watchEffect } from 'vue'
    import { marked } from 'marked'

    // 初始化：从 localStorage 读取
    const notes = reactive(
        JSON.parse(localStorage.getItem('notes') || '[]').map((text) => ({
            text,
            editing: false,
        }))
    )

    // 渲染 Markdown 文本
    const renderMarkdown = (text) => {
        return marked(text)
    }

    // 添加新笔记
    const addNote = () => {
        notes.push({
            text: '',
            editing: true,
        })
    }

    // 删除笔记
    const deleteNote = (index) => {
        notes.splice(index, 1)
    }

    // 切换编辑/展示模式
    const toggleEdit = (index) => {
        notes[index].editing = !notes[index].editing
    }

    // 更新笔记内容
    const updateNote = (index) => {
        // 此处无需手动更新 rendered，展示时直接调用 renderMarkdown 函数
    }

    // 自动保存笔记内容到 localStorage
    watchEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes.map((n) => n.text)))
    })
</script>
