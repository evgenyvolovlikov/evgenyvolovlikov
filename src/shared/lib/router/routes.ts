export const ROUTE_CONSTANTS = {
	PUBLIC: 'public',
	PRIVATE: 'private',
	LOGIN: 'login',
	DASHBOARD: 'dashboard'
}

export type AppRoute = (typeof ROUTE_CONSTANTS)[keyof typeof ROUTE_CONSTANTS]
