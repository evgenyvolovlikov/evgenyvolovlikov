interface IMapPolyfill<T> {
	mapPolyfill<U>(
		callback: (value: T, index: number, array: T[]) => U,
		thisArg?: unknown
	): U[]
}

interface IReducePolyfill<T> {
	reducePolyfill<U>(
		callback: (accumulator: U, value: T, index: number, array: T[]) => U,
		initialValue?: U
	): U
	reducePolyfill<T>(
		callback: (accumulator: T, value: T, index: number, array: T[]) => T
	): T
}

declare global {
	interface Array<T> extends IMapPolyfill<T>, IReducePolyfill<T> {}
}

export {}
