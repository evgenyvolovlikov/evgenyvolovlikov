// // mapPolyfill
// const mappedArray = [1, 2, 3].mapPolyfill((element, index, array) => {
// 	return {
// 		element,
// 		index,
// 		array
// 	}
// })

// const mappedArrayWithCtx = [1, 2, 3].mapPolyfill(
// 	function (this: {b: string; c: Function}, element, index, array) {
// 		return {
// 			element,
// 			fromContext: this.b,
// 			processed: this.c({
// 				element,
// 				index,
// 				array
// 			// })
// 		}
// 	},
// 	{
// 		b: 'b',
// 		c(d: any) {
// 			return {
// 				b: this.b ,
// 				d
// 			}
// 		}
// 	}
// )

// // reducePolyfillconst
// const reduced = [1, 2, 3].reducePolyfill(
// 	(acc, val, i, array) => ({accumulator: acc.accumulator + val, i, array}),
// 	{accumulator: 0}
// )
