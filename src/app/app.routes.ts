import {Routes} from '@angular/router'
import {ProfilePageComponent} from '@pages/profile'
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
		path: AppRoutes.PROFILE,
		component: ProfilePageComponent
	},
	{path: '**', redirectTo: AppRoutes.AUTH}
]
