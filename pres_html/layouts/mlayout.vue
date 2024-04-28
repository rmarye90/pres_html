<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div relative h-full w-full p-4>
    <div flex="~ justify-end">
      <img
        v-motion
        :initial="{ x: 100, opacity: 0 }"
        :enter="{ x: 0, opacity: 0.5 }"
        :leave="{ x: -100, opacity: 0 }"
        :src="image"
        alt="html Logo"
      />
    </div>
    <slot />
  </div>
</template>
