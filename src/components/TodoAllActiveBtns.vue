<template>
	<div class="position">
		<div class="items">
			<p class="items-left">{{ activeCards.length }} items left</p>
			<button @click="clearCompleted" class="clear-list">
				Clear Completed
			</button>
		</div>
		<aside>
			<ul class="btns-list">
				<li @click="select">
					<a @click.prevent="selected = 1" :class="{ active: selected === 1 }"
						>All</a
					>
				</li>
				<li @click="select">
					<a @click.prevent="selected = 2" :class="{ active: selected === 2 }"
						>Active</a
					>
				</li>
				<li @click="select">
					<a @click.prevent="selected = 3" :class="{ active: selected === 3 }"
						>Completed</a
					>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
// eslint-disable-next-line
const props = defineProps({
	cards: {
		type: Array,
	},
})
// eslint-disable-next-line
const emit = defineEmits(['remove-completed', 'selected'])
const clearCompleted = () => {
	emit('remove-completed')
}

const selected = ref(1)
const select = () => {
	emit('selected', selected.value)
}
const activeCards = computed(() => {
	return props.cards.filter((card) => !card.check)
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';

.items {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1rem;
	color: var(--Text-faded);
	background-color: var(--Card-Bg);
	border-radius: 0 0 0.25rem 0.25rem;
	font-size: 0.75rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.75rem;
	& p {
		margin: 0;
	}
}
p.items-left {
	user-select: none;
}
.clear-list {
	cursor: pointer;
	border: none;
	background-color: transparent;
}

.btns-list {
	@extend %allLi;
	background-color: var(--Card-Bg);
	border-radius: 0.25rem;
	list-style: none;
	justify-content: center;
	margin: 1rem 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.75rem;

	& a {
		text-decoration: none;
		color: var(--Text-faded);
		font-size: larger;
		font-weight: 700;
		user-select: none;
		cursor: pointer;
	}
	& a.active {
		color: var(--Active);
	}
}

@media only screen and (min-width: 1400px) {
	.position {
		position: relative;
	}
	.items {
		padding: 1.5rem 1.5rem;
		font-size: 0.85rem;
	}
	.btns-list {
		font-size: 0.8rem;
		background-color: transparent;
		position: absolute;
		margin: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: unset;
	}
}
</style>
