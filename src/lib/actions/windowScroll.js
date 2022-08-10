export function windowScroll(node) {
	const handleScroll = (event) => {
		node.dispatchEvent(new CustomEvent('windowscroll'))
	}

	document.addEventListener('scroll', handleScroll, true)

	return {
		destroy() {
			document.removeEventListener('scroll', handleScroll, true)
		}
	}
}
