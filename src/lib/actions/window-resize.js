//custom action to help with window resizing
export function windowResize(node) {
	const handleResize = () => {
		node.dispatchEvent(new CustomEvent('windowresize'));
	};
	window.addEventListener('resize', handleResize, true);

	return {
		destroy() {
			window.removeEventListener('resize', handleResize, true);
		}
	};
}
