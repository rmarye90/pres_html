<script setup lang="ts">
defineProps({
	posY: {
		type: Number,
		default: 0,
	},
	posX: {
		type: Number,
		default: 0,
	},
	size: {
		type: Number,
		default: 1,
	}
})
</script>
<template>
  <div
    v-motion="{ initial: { opacity: 0 }, enter: { opacity: 0.8 } }"
    v-if="$slidev.nav.clicks === 1"
    bg-black
    absolute
    top-0
    left-0
    right-0
    bottom-0
  />
  <div v-click="1" absolute top-7 left-40>
    <Transform
      scale="1.2"
      v-motion="{
        initial: { x: -100, y: 200, scale: 0.7, opacity: 0 },
        enter: { x: posX, y: posY, scale: size, opacity: 1 },
      }"
      v-if="$slidev.nav.clicks === 1"
    >
      <slot />
    </Transform>
  </div>
</template>
