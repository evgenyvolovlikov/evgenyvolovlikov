import {Routes} from '@angular/router'
import {AccountPageComponent} from '@pages/account'
import {AppRoutes} from '@shared/const/router'
import {AuthLayoutComponent} from '@shared/layouts/auth'

export const appRoutes: Routes = [
	{
		path: AppRoutes.AUTH,
		component: AuthLayoutComponent,
		children: [
			{
				path: AppRoutes.LOGIN,
				loadComponent: () =>
					import('@pages/login').then(c => c.LoginPageComponent)
			},
			{
				path: AppRoutes.REGISTER,
				loadComponent: () =>
					import('@pages/register').then(c => c.RegisterPageComponent)
			},
			{
				path: '**',
				redirectTo: AppRoutes.LOGIN,
				pathMatch: 'full'
			}
		]
	},
	{
		path: AppRoutes.ACCOUNT,
		component: AccountPageComponent,
		children: [
			{
				path: AppRoutes.PROFILE,
				loadComponent: () =>
					import('@pages/profile').then(c => c.ProfilePageComponent)
			},
			{
				path: AppRoutes.COURSES,
				loadComponent: () =>
					import('@pages/courses').then(c => c.CoursesPageComponent)
			},
			{
				path: '**',
				redirectTo: AppRoutes.PROFILE,
				pathMatch: 'full'
			}
		]
	},
	{path: '**', redirectTo: AppRoutes.AUTH}
]
