<template>
    <div class="flex h-screen items-center justify-center">
        <div class="rounded-2xl bg-gray-400 p-8">
            <h3 class="font-mono text-2xl">
                Enter all of the choices divided by a comma (',').
                <br />
                Press enter when you're done
            </h3>
            <textarea
                class="my-4 h-36 w-full bg-gray-200 p-4"
                placeholder="Enter choices here..."
                v-model="textareaText"></textarea>

            <div class="flex gap-2" v-if="tagList[0] !== ''">
                <div class="h-8 rounded-2xl bg-amber-200 p-1" v-for="item in tagList" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, watchEffect } from 'vue'

    const textareaText = ref('')

    const tagList = ref([])

    const splitTag = () => {
        tagList.value = []
        const tagItems = textareaText.value.split(',')
        tagItems.forEach((item) => {
            tagList.value.push(item)
        })
        console.log(tagList.value)
    }

    watchEffect(() => {
        console.log(textareaText.value)
        splitTag()
    })
</script>
