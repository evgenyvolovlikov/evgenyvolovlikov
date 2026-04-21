import {Routes} from '@angular/router'
import {ROUTE_CONSTANTS} from '@shared/lib/router'
import {PublicLayoutComponent} from './layouts/public'
import {PrivateLayoutComponent} from './layouts/private'
import {LoginPageComponent} from '@pages/login'
import {DashboardPageComponent} from '@pages/dashboard'

export const appRoutes: Routes = [
	{
		path: ROUTE_CONSTANTS.PUBLIC,
		component: PublicLayoutComponent,
		children: [
			{
				path: ROUTE_CONSTANTS.LOGIN,
				component: LoginPageComponent
			},
			{
				path: '**',
				redirectTo: ROUTE_CONSTANTS.LOGIN
			}
		]
	},
	{
		path: ROUTE_CONSTANTS.PRIVATE,
		component: PrivateLayoutComponent,
		children: [
			{
				path: ROUTE_CONSTANTS.DASHBOARD,
				component: DashboardPageComponent
			}
		]
	},
	{
		path: '**',
		redirectTo: ROUTE_CONSTANTS.PRIVATE
	}
]
