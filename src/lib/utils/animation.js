export function getStyleValue(progress, start, length, startValue, endValue) {
	let animationProgress = (progress - start) / length
	if (animationProgress < 0) {
		return startValue
	}
	if (animationProgress > 1) {
		return endValue
	}
	let valueDistance = Math.abs(endValue - startValue)
	return startValue + animationProgress * valueDistance
}
