import {Routes} from '@angular/router'
import {ROUTE_CONSTANTS} from '@shared/lib/router'
import {PublicLayoutComponent} from './layouts/public'
import {PrivateLayoutComponent} from './layouts/private'
import {LoginPageComponent} from '@pages/login'
import {DashboardPageComponent} from '@pages/dashboard'
import {authGuard} from '@shared/guards/auth.guards'
import {AssetsPageComponent} from '@pages/assets/assets.component'
import {RatesPageComponent} from '@pages/rates/rates.component'
import {ExchangePageComponent} from '@pages/exchange/exchange.component'

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
		canActivate: [authGuard],
		children: [
			{
				path: ROUTE_CONSTANTS.DASHBOARD,
				component: DashboardPageComponent
			},
			{
				path: ROUTE_CONSTANTS.ASSETS,
				component: AssetsPageComponent
			},
			{
				path: ROUTE_CONSTANTS.RATES,
				component: RatesPageComponent
			},
			{
				path: ROUTE_CONSTANTS.EXCHANGE,
				component: ExchangePageComponent
			}
		]
	},
	{
		path: '**',
		redirectTo: ROUTE_CONSTANTS.PUBLIC
	}
]
