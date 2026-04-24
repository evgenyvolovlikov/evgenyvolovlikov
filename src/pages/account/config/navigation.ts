import {AppRoutes} from '@shared/config'
import {NavLink} from '@shared/model'

export const ACCOUNT_LINKS: NavLink[] = [
	{
		label: 'Профиль',
		route: `/${[AppRoutes.ACCOUNT, AppRoutes.PROFILE].join('/')}`,
		icon: '👤'
	},

	{
		label: 'Курсы',
		route: `/${[AppRoutes.ACCOUNT, AppRoutes.COURSES].join('/')}`,
		icon: '📖'
	}
]
