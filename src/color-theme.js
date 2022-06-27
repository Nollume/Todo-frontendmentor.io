export const getCurrentTheme = () => {
	let theme = window.matchMedia('(prefers-color-scheme: light)').matches
		? 'light'
		: 'dark'

	localStorage.getItem('color-theme')
		? (theme = localStorage.getItem('color-theme'))
		: null
	return theme
}
