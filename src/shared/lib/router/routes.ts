export const ROUTE_CONSTANTS = {
	PUBLIC: 'public',
	PRIVATE: 'private',
	LOGIN: 'login',
	DASHBOARD: 'dashboard',
	ASSETS: 'assets',
	RATES: 'rates',
	EXCHANGE: 'exchange'
}

export type AppRoute = (typeof ROUTE_CONSTANTS)[keyof typeof ROUTE_CONSTANTS]
