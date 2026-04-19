import {ContainerWithMostWater} from './index'

function trackMemory(fn: () => void) {
	if (global.gc) global.gc()

	const startMemory = process.memoryUsage().heapUsed
	const startTime = performance.now()

	fn()

	const endTime = performance.now()
	const endMemory = process.memoryUsage().heapUsed

	return {
		time: (endTime - startTime).toFixed(4) + 'ms',
		memory: ((endMemory - startMemory) / 1024 / 1024).toFixed(4) + 'MB'
	}
}

const bigData = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000))
const container = new ContainerWithMostWater(bigData)

console.log('--- Замер O(n²) ---')
console.log(trackMemory(() => container.firstSolution()))

console.log('--- Замер O(n) ---')
console.log(trackMemory(() => container.secondSolution()))

// ts-node --skip-project speed.ts
