<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
  listStyle: {
    type: String,
    default: "list-square",
  },
});
</script>

<template>
  <div w-full px-8 mb-4>
    <h2 class="text-md fw-bold text-ts font-mono mb-2">{{ props.title }} :</h2>
    <ul :class="props.listStyle" px-6>
      <li font-sans opacity-90 mb-2 v-for="item in props.list">{{ item }}</li>
    </ul>
  </div>
</template>
