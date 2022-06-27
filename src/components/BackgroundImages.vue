<template>
	<picture v-if="props.theme">
		<source media="(min-width: 800px)" srcset="images/bg-desktop-light.jpg" />
		<img src="images/bg-mobile-light.jpg" alt="cover-light-theme" />
	</picture>

	<picture v-else>
		<source media="(min-width: 800px)" srcset="images/bg-desktop-dark.jpg" />
		<img src="images/bg-mobile-dark.jpg" alt="cover-dark-theme" />
	</picture>
</template>

<script setup>
import { computed } from '@vue/reactivity'
// eslint-disable-next-line
const props = defineProps({
	theme: {
		type: Boolean,
	},
})
</script>

<style lang="scss" scoped>
img {
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: auto;
	z-index: -1;
}
</style>
