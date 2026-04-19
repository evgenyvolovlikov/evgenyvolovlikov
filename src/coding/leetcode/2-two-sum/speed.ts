import {TwoSum} from './index'

const bigArray = Array.from({length: 50000}, (_, i) => i)
const bigTarget = 99997

const benchmark = new TwoSum(bigArray, bigTarget)

console.log('--- ТЕСТ СКОРОСТИ (50,000 элементов) ---')

// O(n²)
console.time('Метод 1 (Brute Force)')
benchmark.firstSolution()
console.timeEnd('Метод 1 (Brute Force)')

// (O(n))
console.time('Метод 2 (Map)')
benchmark.secondSolution()
console.timeEnd('Метод 2 (Map)')

// (O(n log n))
console.time('Метод 5 (Two Pointers + Sort)')
benchmark.fifthSolution()
console.timeEnd('Метод 5 (Two Pointers + Sort)')
