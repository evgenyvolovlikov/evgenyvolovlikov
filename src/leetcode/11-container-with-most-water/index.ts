export type WaterMethodType = keyof Omit<ContainerWithMostWater, 'heights' | 'dataInfo'>

export class ContainerWithMostWater {
	constructor(private heights: number[] = []) {
		if (heights.length < 2) {
			throw new Error('Массив должен содержать минимум 2 числа')
		}
	}

	get dataInfo(): string {
		return `Ищем максимальный объем воды для массива из ${this.heights.length} элементов`
	}

	// Время: O(n²) Память: O(1)
	public firstSolution(): number {
		let maxArea: number = 0
		for (let i = 0; i < this.heights.length; i++) {
			for (let j = i + 1; j < this.heights.length; j++) {
				let height = Math.min(this.heights[i], this.heights[j])
				let width = j - i
				let area = height * width
				maxArea = Math.max(maxArea, area)
			}
		}
		return maxArea
	}

	// Время: O(n) Память: O(1)
	public secondSolution(): number {
		let start: number = 0
		let end: number = this.heights.length - 1
		let maxArea: number = 0

		while (start < end) {
			let height = Math.min(this.heights[start], this.heights[end])
			let width = end - start
			let area = height * width
			maxArea = Math.max(maxArea, area)

			if (this.heights[start] < this.heights[end]) {
				start++
			} else {
				end--
			}
		}

		return maxArea
	}

	public thirdSolution() {
		
	}

	static quickSolve(heights: number[], methodName: WaterMethodType): number {
		const instance = new ContainerWithMostWater(heights)
		const method = instance[methodName] as () => number
		return method.call(instance)
	}
}

const water = new ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])
console.log(water.dataInfo)
console.log('Метод перебора:', water.firstSolution())
console.log('Оптимальный метод:', water.secondSolution())
