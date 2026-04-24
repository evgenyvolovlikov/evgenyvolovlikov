import {Routes} from '@angular/router'
import {AccountPageComponent} from '@pages/account'
import {HomePageComponent} from '@pages/home'
import {AppRoutes, getRouteCourse} from '@shared/config'

import {AuthLayoutComponent} from '@shared/layouts/auth'
import {MainLayoutComponent} from '@shared/layouts/main'

export const appRoutes: Routes = [
	{
		path: AppRoutes.MAIN,
		component: MainLayoutComponent,
		children: [
			{
				path: AppRoutes.MAIN,
				component: HomePageComponent
			},
			{
				path: getRouteCourse(':id'),
				loadComponent: () =>
					import('@pages/course').then(m => m.CoursePageComponent)
			}
		]
	},

	{
		path: AppRoutes.AUTH,
		component: AuthLayoutComponent, // Рефактор
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
				path: AppRoutes.EDIT,
				loadComponent: () =>
					import('@pages/edit').then(c => c.EditPageComponent)
			},
			{
				path: '**',
				redirectTo: AppRoutes.PROFILE,
				pathMatch: 'full'
			}
		]
	},
	{path: '**', redirectTo: AppRoutes.MAIN}
]
