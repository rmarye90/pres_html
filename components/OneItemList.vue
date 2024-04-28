<script setup>
defineProps({
    title: String,
    content: String,
    textSize: String,
})
</script>

<template>
   <ul class="flex flex-col justify-center">
        <li style="list-style-type: none; padding: 0; margin: 0"><strong class="text-gradient-apple">{{ title }}</strong></li>
        <li :class="{ 'text-color-primary': true, [textSize]: textSize, 'text-lg': !textSize }">
            {{ content }}
        </li>   
    </ul>
</template>