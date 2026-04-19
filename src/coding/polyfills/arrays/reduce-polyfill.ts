Array.prototype.reducePolyfill = function <T, U>(
	callback: (accumulator: U, value: T, index: number, array: T[]) => U,
	initialValue?: U
) {
	if (this == null) {
		throw new Error('Array.prototype.reducePolyfill вызван на null или undefined')
	}

	if (typeof callback !== 'function') {
		throw new Error(`${callback} не является функцией`)
	}

	const noInitialValue = arguments.length < 2
	if (this.length == 0 && noInitialValue) {
		throw new Error('Reduce пустой массив без начального значения')
	}

	let accumulator = noInitialValue ? this[0] : initialValue
	const startIndex = noInitialValue ? 1 : 0

	for (let i = startIndex; i < this.length; i++) {
		if (i in this) {
			accumulator = callback(accumulator, this[i], i, this)
		}
	}

	return accumulator
}
