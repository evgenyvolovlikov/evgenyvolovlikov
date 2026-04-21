export const ROUTE_CONSTANTS = {
	PUBLIC: 'public',
	PRIVATE: 'private'
}

export type AppRoute = (typeof ROUTE_CONSTANTS)[keyof typeof ROUTE_CONSTANTS]
