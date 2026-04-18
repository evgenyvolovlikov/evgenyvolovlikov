declare global {
	interface Array<T> {
		mapPolyfill<U>(
			callback: (value: T, index: number, array: T[]) => U,
			thisArg?: any
		): U[]
	}
}

export {}
