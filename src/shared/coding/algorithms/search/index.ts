export class Search {
	// Время: O(n) Память: O(1)
	static linear<T>(array: T[], element: number): number | null {
		for (let i = 0; i < array.length; i += 1) {
			if (array[i] === element) return i
		}
		return null
	}

	// Время: O(log n) Память: O(1)
	static binary<T extends string | number>(array: T[], element: T): number | null {
		let start = 0
		let end = array.length - 1
		while (start <= end) {
			const middle = Math.floor((start + end) / 2)
			const current = array[middle]

			if (current === element) return middle

			if (current < element) {
				start = middle + 1
			} else {
				end = middle - 1
			}
		}
		return null
	}
}

Search.linear([1, 2, 3, 4, 5], 3)
Search.binary([1, 2, 3, 4, 5], 3)
