export const ROUTE_CONSTANTS = {
	HOME: ''
}

export type AppRoute = (typeof ROUTE_CONSTANTS)[keyof typeof ROUTE_CONSTANTS]
