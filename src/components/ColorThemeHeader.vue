<template>
	<BackgroundImages :theme="lightTheme" />

	<div class="head-in-container">
		<h1 class="headline">Todo</h1>
		<button class="theme" @click="colorThemeChange">
			<svg
				v-if="!lightTheme"
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
			>
				<path
					fill="#FFF"
					fill-rule="evenodd"
					d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
				/>
			</svg>
			<svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26">
				<path
					fill="#FFF"
					fill-rule="evenodd"
					d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
				/>
			</svg>
		</button>
		<audio src="audio/light-on.mp3" ref="audioOn"></audio>
		<audio src="audio/light-off.mp3" ref="audioOff"></audio>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { getCurrentTheme } from '../color-theme'
import BackgroundImages from './BackgroundImages.vue'
const audioOn = ref(null)
const audioOff = ref(null)
const lightTheme = ref(true)

const loadTheme = (theme) => {
	const root = document.querySelector(':root')
	if (theme === 'light') {
		lightTheme.value = true
	} else {
		lightTheme.value = false
	}

	root.setAttribute('color-scheme', `${theme}`)
}

const colorThemeChange = () => {
	let theme = getCurrentTheme()
	if (theme === 'dark') {
		audioOn.value.play()
		theme = 'light'
		audioOn.value.currentTime = 0
	} else {
		audioOff.value.play()
		theme = 'dark'

		audioOff.value.currentTime = 0
	}
	localStorage.setItem('color-theme', `${theme}`)
	loadTheme(theme)
}
onBeforeMount(() => {
	loadTheme(getCurrentTheme())
})
</script>

<style lang="scss" scoped>
h1 {
	color: var(--Text-Headline);
	margin: 0;
	font-size: clamp(1.75rem, 3vw, 3.7rem);
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	user-select: none;
}

.theme {
	width: 1.5rem;
	aspect-ratio: 1;
	border-radius: 50%;
	outline: none;
	border: none;
	background-color: transparent;
	display: grid;
	place-items: center;
	padding: 0;

	& svg {
		transform: scale(0.8);
	}
}

.head-in-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	width: 85%;
	margin: 0 auto;
}
@media only screen and (min-width: 800px) {
	.head-in-container {
		width: 55%;
	}
	.theme svg {
		transform: scale(1);
	}
}
@media only screen and (min-width: 1400px) {
	.head-in-container {
		width: 38%;
	}
	h1 {
		letter-spacing: 1rem;
	}
}
</style>
