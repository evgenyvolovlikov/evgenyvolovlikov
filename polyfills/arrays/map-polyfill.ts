Array.prototype.mapPolyfill = function <T, U>(
	callback: (value: T, index: number, array: T[]) => U,
	thisArg?: any
): U[] {
	if (this == null) {
		throw new Error('Array.prototype.mapPolyfill был вазван на null или undefined')
	}

	if (typeof callback !== 'function') {
		throw new Error(`${callback} is not a function`)
	}

	const newArray: U[] = new Array(this.length)
	for (let i = 0; i < this.length; i++) {
		if (i in this) {
			newArray[i] = callback.call(thisArg, this[i], i, this)
		}
	}
	return newArray
}

// 1. this будет указывать на сам массив с которым работает
// 2. callback будет вызван (objectWithArrayArgs), там где был объявлен ->
// а именно в mappedArray (array.mapPolyfill((element, index, array) <- в этих аргументах => {...}))
// 3. Важно ставить ключевое слово return, чтобы новое значение записывалось в новый массив, при каждой итерации (return ...)
// 4. thisArgs указывает на контекст, а именно где выполнять данную функцию, пример: examples.ts
