<script setup>
defineProps({
  title: String,
  contents: Array,
  textSize: String,
});
</script>

<template>
  <ul class="flex flex-col justify-center">
    <li style="list-style-type: none; padding: 0; margin: 0">
      <strong class="text-lg text-gradient-apple">{{ title }}</strong>
    </li>
    <li
      :class="{
        'text-color-primary': true,
        [textSize]: textSize,
        'text-lg': !textSize,
      }"
      v-for="content in contents"
    >
      {{ content }}
    </li>
  </ul>
</template>