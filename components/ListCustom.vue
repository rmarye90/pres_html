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
  listBullet: {
    type: String,
    default: "list-square",
  },
  listSize: {
    type: String,
    default: "text-md",
  },
 
});
</script>

<template>
  <div w-full px-8 mb-4>
    <h2 :class="props.listSize" class="fw-bold text-ts font-mono mb-2">
      {{ props.title }} :
    </h2>
    <slot />
    <ul :class="props.listBullet" px-6>
      <li font-sans opacity-90 mb-2 v-for="item in props.list">{{ item }}</li>
    </ul>
  </div>
</template>
