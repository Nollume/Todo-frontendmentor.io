<template>
	<div
		class="li"
		v-if="selected === 1"
		@mouseover="showHandle"
		@mouseleave="hideHandle"
	>
		<div
			@click="checked"
			class="check"
			:style="[
				card.check
					? { background: 'var(--cheked-gradiant)' }
					: { background: 'transparent' },
			]"
		>
			<svg
				v-if="card.check"
				xmlns="http://www.w3.org/2000/svg"
				width="11"
				height="9"
			>
				<path
					fill="none"
					stroke="#FFF"
					stroke-width="2"
					d="M1 4.304L3.696 7l6-6"
				/>
			</svg>
		</div>
		<p
			@click="checked"
			:style="[
				card.check
					? { textDecorationLine: 'line-through', color: 'var(--Text-faded)' }
					: { textDecorationLine: 'none', color: 'var(--Text)' },
			]"
		>
			{{ card.title }}
		</p>

		<button ref="handleButton" class="handle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-move"
			>
				<polyline points="5 9 2 12 5 15"></polyline>
				<polyline points="9 5 12 2 15 5"></polyline>
				<polyline points="15 19 12 22 9 19"></polyline>
				<polyline points="19 9 22 12 19 15"></polyline>
				<line x1="2" y1="12" x2="22" y2="12"></line>
				<line x1="12" y1="2" x2="12" y2="22"></line>
			</svg>
		</button>
		<div class="remove-item" v-on:click="removeCard" ref="removeBtn">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
				<path
					fill="#494C6B"
					fill-rule="evenodd"
					d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
				/>
			</svg>
		</div>
	</div>
	<div
		class="li"
		v-else-if="selected === 2 && !card.check"
		@mouseover="showHandle"
		@mouseleave="hideHandle"
	>
		<div
			@click="checked"
			class="check"
			:style="[
				card.check
					? { background: 'var(--cheked-gradiant)' }
					: { background: 'transparent' },
			]"
		>
			<svg
				v-if="card.check"
				xmlns="http://www.w3.org/2000/svg"
				width="11"
				height="9"
			>
				<path
					fill="none"
					stroke="#FFF"
					stroke-width="2"
					d="M1 4.304L3.696 7l6-6"
				/>
			</svg>
		</div>
		<p
			@click="checked"
			:style="[
				card.check
					? { textDecorationLine: 'line-through', color: 'var(--Text-faded)' }
					: { textDecorationLine: 'none', color: 'var(--Text)' },
			]"
		>
			{{ card.title }}
		</p>
		<button ref="handleButton" class="handle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-move"
			>
				<polyline points="5 9 2 12 5 15"></polyline>
				<polyline points="9 5 12 2 15 5"></polyline>
				<polyline points="15 19 12 22 9 19"></polyline>
				<polyline points="19 9 22 12 19 15"></polyline>
				<line x1="2" y1="12" x2="22" y2="12"></line>
				<line x1="12" y1="2" x2="12" y2="22"></line>
			</svg>
		</button>
		<div class="remove-item" v-on:click="removeCard">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
				<path
					fill="#494C6B"
					fill-rule="evenodd"
					d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
				/>
			</svg>
		</div>
	</div>
	<div
		class="li"
		v-else-if="selected === 3 && card.check"
		@mouseover="showHandle"
		@mouseleave="hideHandle"
	>
		<div
			@click="checked"
			class="check"
			:style="[
				card.check
					? { background: 'var(--cheked-gradiant)' }
					: { background: 'transparent' },
			]"
		>
			<svg
				v-if="card.check"
				xmlns="http://www.w3.org/2000/svg"
				width="11"
				height="9"
			>
				<path
					fill="none"
					stroke="#FFF"
					stroke-width="2"
					d="M1 4.304L3.696 7l6-6"
				/>
			</svg>
		</div>
		<p
			@click="checked"
			:style="[
				card.check
					? { textDecorationLine: 'line-through', color: 'var(--Text-faded)' }
					: { textDecorationLine: 'none', color: 'var(--Text)' },
			]"
		>
			{{ card.title }}
		</p>
		<button ref="handleButton" class="handle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-move"
			>
				<polyline points="5 9 2 12 5 15"></polyline>
				<polyline points="9 5 12 2 15 5"></polyline>
				<polyline points="15 19 12 22 9 19"></polyline>
				<polyline points="19 9 22 12 19 15"></polyline>
				<line x1="2" y1="12" x2="22" y2="12"></line>
				<line x1="12" y1="2" x2="12" y2="22"></line>
			</svg>
		</button>
		<div class="remove-item" v-on:click="removeCard">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
				<path
					fill="#494C6B"
					fill-rule="evenodd"
					d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
				/>
			</svg>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

// eslint-disable-next-line
const props = defineProps({
	card: {
		type: Object,
	},
	selected: {
		type: Number,
	},
})
// eslint-disable-next-line
const emit = defineEmits(['checked', 'remove-card'])
const checked = () => {
	emit('checked', { check: true, id: props.card.id })
}
const removeCard = () => {
	emit('remove-card', props.card.id)
}

const handleButton = ref(null)
const removeBtn = ref(null)
const showHandle = () => {
	handleButton.value.style.opacity = 1
	removeBtn.value.style.opacity = 1
}
const hideHandle = () => {
	handleButton.value.style.opacity = 0
	removeBtn.value.style.opacity = 0
}
</script>

<style lang="scss" scoped>
.check {
	border: 1px solid var(--Text-faded);
	border-radius: 50%;
	min-width: 1.3rem;
	height: 1.3rem;

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.check:is(:active, :hover) {
	border: 1px solid var(--Shadow);
}
p {
	margin: 0;
	padding: 0.5rem 0rem;
	cursor: pointer;
}

.remove-item {
	cursor: pointer;
	transform: scale(0.7);
	opacity: 0;
}
.handle {
	opacity: 0;
	cursor: move;
	background-color: transparent;
	outline: none;
	border: none;
	margin-left: auto;

	& svg {
		fill: #494c6b;
		transform: scale(0.8);
	}
}
@media only screen and (min-width: 800px) {
	.remove-item {
		transform: scale(1);
	}
	p {
		font-size: 1rem;
	}
}

@media only screen and (min-width: 1400px) {
	p {
		font-size: 1.125rem;
	}
}
</style>
