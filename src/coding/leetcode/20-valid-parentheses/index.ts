export type ParenthesesMethodType = keyof Omit<ValidParentheses, 'str' | 'dataInfo'>

export class ValidParentheses {
	constructor(private readonly str: string) {
		if (str.length < 1) {
			throw new Error('Строка не может быть пустой')
		}
	}

	get dataInfo(): string {
		return `Проверка валидности скобок для строки длиной ${this.str.length} символов`
	}

	// Время: O(n)  Память: O(n)
	firstSolution(): boolean {
		if (this.str.length % 2 !== 0) return false

		const parens: Record<string, string> = {
			'(': ')',
			'[': ']',
			'{': '}'
		}

		const stack: (keyof typeof parens)[] = []

		for (const char of this.str) {
			if (parens[char]) {
				stack.push(char as keyof typeof parens)
			} else {
				const lastOpen = stack.pop()
				if (!lastOpen || char !== parens[lastOpen]) return false
			}
		}

		return stack.length === 0
	}

	// Время: O(n²) Память: O(n)
	secondSolution(): boolean {
		let str = this.str
		const regex = /\(\)|\[\]|\{\}/g

		while (regex.test(str)) {
			str = str.replace(regex, '')
		}

		return str.length === 0
	}

	// Время: O(n²) Память: O(1)
	thirdSolution(): boolean {
		let str = this.str
		while (str.includes('()') || str.includes('[]') || str.includes('{}')) {
			str = str.replace('()', '').replace('[]', '').replace('{}', '')
		}

		return str.length === 0
	}

	// Время: O(n²) Память: O(1)
	fourthSolution(s: string = this.str): boolean {
		if (s === '') return true
		const next = s.replace('()', '').replace('[]', '').replace('{}', '')
		if (next === s) return false
		return this.fourthSolution(next)
	}

	static quickSolve(
		str: string,
		methodName: ParenthesesMethodType = 'firstSolution'
	): boolean {
		const instance = new ValidParentheses(str)
		const method = instance[methodName] as () => boolean
		return method.call(instance)
	}
}

const quickResult = ValidParentheses.quickSolve('({[})')
console.log('Результат (через quickSolve):', quickResult)
