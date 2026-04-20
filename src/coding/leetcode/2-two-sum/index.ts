export type MethodType = keyof Omit<TwoSum, 'nums' | 'target' | 'dataInfo'>

export class TwoSum {
	constructor(
		private nums: number[],
		private target: number
	) {
		if (nums.length < 2) throw new Error('Массив должен содержать минимум 2 числа')
	}

	get dataInfo(): string {
		return `Ищем сумму ${this.target} в массиве длинной ${this.nums.length}`
	}

	// Время: O(n²) Память: O(1)
	public firstSolution(): number[] {
		for (let i = 0; i < this.nums.length; i++) {
			for (let j = i + 1; j < this.nums.length; j++) {
				if (this.nums[i] + this.nums[j] === this.target) {
					return [i, j]
				}
			}
		}
		return []
	}

	// Время: O(n) Память: O(n)
	public secondSolution(): number[] {
		const map = new Map<number, number>()
		for (let i = 0; i < this.nums.length; i++) {
			const num = this.nums[i]
			const complement = this.target - num
			if (map.has(complement)) {
				return [map.get(complement) as number, i]
			}
			map.set(num, i)
		}
		return []
	}

	// Время: O(n) Память: O(n)
	public thirdSolution(): number[] {
		const obj: Record<number, number> = {}
		for (let i = 0; i < this.nums.length; i++) {
			const currentNum = this.nums[i]
			const complement = this.target - currentNum
			if (complement in obj) {
				return [obj[complement], i]
			} else {
				obj[currentNum] = i
			}
		}
		return []
	}

	// Время: O(n) Память: O(n)
	public fourthSolution(): number[] {
		const map = new Map<number, number>()
		let result: number[] = []
		this.nums.some((el, i) => {
			const complement = this.target - el
			const complementIndex = map.get(complement)
			if (complementIndex !== undefined) {
				result = [complementIndex, i]
				return true
			}

			map.set(el, i)
			return false
		})
		return result
	}

	// Время: O(n log n) Память: O(n)
	public fifthSolution(): number[] {
		let start = 0
		let end: number = this.nums.length - 1
		const copyArray = this.nums.mapPolyfill((value, index) => ({value, index}))
		const sortedArray = copyArray.sort((a, b) => a.value - b.value)

		while (start < end) {
			const sum: number = sortedArray[start].value + sortedArray[end].value
			if (sum === this.target) {
				return [sortedArray[start].index, sortedArray[end].index]
			} else {
				if (sum < this.target) {
					start++
				} else {
					end--
				}
			}
		}

		return []
	}

	static quickSolve(
		nums: number[],
		target: number,
		methodName: MethodType
	): number[] {
		const instance = new TwoSum(nums, target)
		const method = instance[methodName]

		return method.call(instance)
	}
}

const solutions = new TwoSum([1, 2, 3, 4, 5], 9)
console.log(solutions.dataInfo)
console.log(TwoSum.quickSolve([1, 2, 3, 4, 5], 9, 'firstSolution'))
console.log(solutions.firstSolution())
console.log(solutions.secondSolution())
console.log(solutions.thirdSolution())
console.log(solutions.fourthSolution())
console.log(solutions.fifthSolution())
