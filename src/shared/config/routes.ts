export const AppRoutes = {
	// Публичные роутинги
	MAIN: '',

	// Авторизация/Регистрация
	AUTH: 'auth',
	LOGIN: 'login',
	REGISTER: 'register',

	// Приватные роутинги
	// Профиль
	ACCOUNT: 'account',
	PROFILE: 'profile',
	// Профиль/Курсы
	COURSES: 'courses',
	COURSE: 'course',
	// Профиль/Админ
	EDIT: 'edit'
} as const

export const getRouteCourse = (id: string) => `course/${id}`

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes]
