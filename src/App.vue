<template>
	<header class="head-container">
		<ColorThemeHeader />
	</header>

	<main class="main-container">
		<CreateTodo @newTodo="newData($event, cards)" />

		<draggable
			class="items"
			:list="cards"
			tag="ul"
			handle=".handle"
			:disabled="!enabled"
			item-key="id"
			ghost-class="ghost"
			@start="dragging = true"
			@end="dragging = false"
		>
			<template #item="{ element }">
				<li>
					<TodoCards
						:card="element"
						:selected="selected"
						@checked="findCard($event, cards)"
						@remove-card="removeCard($event)"
					/>
				</li>
			</template>
		</draggable>

		<TodoAllActiveBtns
			v-if="cards.length"
			:cards="cards"
			@remove-completed="removeCopleted"
			@selected="selected = $event"
		/>
	</main>

	<footer>
		<FooterTodo v-if="cards.length > 1" />
	</footer>
</template>

<script setup>
import CreateTodo from './components/CreateTodo.vue'
import TodoCards from './components/TodoCards.vue'
import TodoAllActiveBtns from '@/components/TodoAllActiveBtns.vue'
import ColorThemeHeader from '@/components/ColorThemeHeader.vue'
import FooterTodo from '@/components/FooterTodo.vue'
import draggable from 'vuedraggable'
import { findCard, newData } from '@/dataCards'
import { ref } from 'vue'

const cards = ref([
	{ title: 'Complete online JavaScript course', id: 1, check: true },
	{ title: 'Jog around the park 3x', id: 2, check: false },
	{ title: '10 minutes meditaion', id: 3, check: false },
	{ title: 'Read for 1 hour', id: 4, check: false },
	{ title: 'Pick up groceries', id: 5, check: false },
	{ title: 'Complete Todo App on Frontend Mentor', id: 6, check: false },
])

const selected = ref(1)
const dragging = ref(false)
const enabled = ref(true)
const removeCard = (event) => {
	if (!event) return
	cards.value = cards.value.filter((card) => card.id !== event)
}
const removeCopleted = () => {
	cards.value = cards.value.filter((card) => !card.check)
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';
.head-container {
	position: relative;
	width: 100%;

	padding: 3rem 0rem 2rem 0rem;
}

.main-container {
	margin: 0 auto;
	width: 85%;

	& ul {
		background-color: var(--Card-Bg);
	}
}

.items {
	border-radius: 0.25rem;
	padding: 0;
	margin-bottom: 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.75rem;

	& li {
		list-style: none;
	}
	& .li {
		margin: 0;
		border-bottom: solid 1px var(--Border-color);
		color: var(--Text);
		@extend %allLi;
		padding: 0.5rem 1rem;
	}
}

footer {
	font-size: smaller;
	text-align: center;

	margin: 2rem 0;
	& p {
		margin: 0;
	}
}
.ghost {
	opacity: 0.5;
	background-color: var(--Shadow);
}
@media only screen and (min-width: 800px) {
	.main-container {
		width: 55%;
	}
}

@media only screen and (min-width: 1400px) {
	.head-container {
		padding: 5rem 0rem 2.5rem 0rem;
	}
	.main-container {
		width: 38%;
	}
	.items {
		& .li {
			padding: 1rem 1.5rem;
			gap: 1.5rem;
		}
	}
	footer {
		margin-top: 2.5rem;
	}
}
</style>
