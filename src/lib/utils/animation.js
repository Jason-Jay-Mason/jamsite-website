//Helper that gets a styles value
//Progress is the progress value from an AnmiationFrame component
//Start: the progress value that the animation will start n>0<1
//Length: the duration of the animation n>0<1
//startValue: The desired css properties start value
//endValue: The desired css properties end value
export function getStyleValue(progress, start, length, startValue, endValue) {
	let animationProgress = (progress - start) / length // get the progress through this animation as a percentage
	//return the start value if we are not at the animation yet
	if (animationProgress < 0) {
		return startValue
	}
	//return the end value if we are at the end of the animation
	if (animationProgress > 1) {
		return endValue
	}
	let valueDistance = Math.abs(endValue - startValue) //get the difference in start and end value
	return startValue + animationProgress * valueDistance //return the current value
}
