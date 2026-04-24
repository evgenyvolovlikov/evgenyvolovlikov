export const AppRoutes = {
	MAIN: '/',
	AUTH: 'auth',
	LOGIN: 'login',
	REGISTER: 'register',
	ACCOUNT: 'account',
	PROFILE: 'profile',
	COURSES: 'courses'
} as const

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes]
