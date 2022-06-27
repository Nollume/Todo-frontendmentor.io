<template>
	<div class="create-new-todo">
		<div class="circle" @click="createTodo">
			<svg width="22" height="22">
				<circle stroke="currentColor" cx="50%" cy="50%" r="10"></circle>
			</svg>
		</div>
		<form @submit.prevent="createTodo">
			<input v-model="text" type="text" placeholder="Create a new todo..." />
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
// eslint-disable-next-line
const emit = defineEmits(['newTodo'])
const createTodo = () => {
	if (!text.value) return
	emit('newTodo', text.value)
	text.value = ''
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';
.create-new-todo {
	@extend %allLi;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.75rem;
	margin-bottom: 1rem;
	padding-top: 0.85rem;
	padding-bottom: 0.85rem;

	border-radius: 0.25rem;

	background-color: var(--Card-Bg);

	& form {
		flex: 1;

		& input {
			width: 100%;
			height: 1.5rem;
			line-height: 1.5rem;
			background-color: var(--Card-Bg);
			outline: none;
			border: none;
			caret-color: var(--Active);
			color: var(--Text);
		}

		& input::placeholder {
			color: var(--Text-faded);
		}
	}
}

.circle {
	fill: var(--Card-Bg);
	color: var(--Text-faded);
	border-radius: 50%;

	display: grid;
	place-items: center;
	cursor: pointer;
}

.circle:is(:hover, :active) {
	background: var(--cheked-gradiant);
}
@media only screen and (min-width: 800px) {
	.create-new-todo {
		font-size: 1rem;
		padding-top: 0.9rem;
		padding-bottom: 0.9rem;
	}
}
@media only screen and (min-width: 1400px) {
	.create-new-todo {
		font-size: 1.125rem;
		padding: 1.25rem 1.5rem;
		gap: 1.5rem;
	}
	form input {
		line-height: 2rem;
	}
}
</style>
