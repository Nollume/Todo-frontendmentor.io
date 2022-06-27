export const findCard = (e, cards) => {
	if (!e?.id || !e?.check) return
	let currentCard = cards.find((card) => {
		return card.id === e.id
	})
	if (currentCard.check === false) {
		currentCard.check = e.check
	} else {
		currentCard.check = false
	}
}

export const newData = (event, cards) => {
	if (!event) return
	cards.unshift({
		title: event,
		id: cards.length ? Math.max(...cards.map((item) => item.id)) + 1 : 1,
		check: false,
	})
}
