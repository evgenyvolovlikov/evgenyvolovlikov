import {Routes} from '@angular/router'
import {AppRoutes} from '@shared/const/router'
import {MainLayoutComponent} from '@shared/layouts/main'

export const appRoutes: Routes = [
	{
		path: AppRoutes.AUTH,
		component: MainLayoutComponent,
		children: [
			{
				path: AppRoutes.LOGIN,
				loadComponent: () =>
					import('@pages/login').then(c => c.LoginPageComponent)
			},
			{
				path: '**',
				redirectTo: AppRoutes.LOGIN,
				pathMatch: 'full'
			}
		]
	},
	{path: '**', redirectTo: AppRoutes.MAIN}
]
