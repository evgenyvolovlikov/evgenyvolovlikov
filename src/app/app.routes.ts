import {Routes} from '@angular/router'
import {ROUTE_CONSTANTS} from '@shared/lib/router'
import {PublicLayoutComponent} from './layouts/public'
import {PrivateLayoutComponent} from './layouts/private'

export const appRoutes: Routes = [
	{
		path: ROUTE_CONSTANTS.PUBLIC,
		component: PublicLayoutComponent
	},
	{
		path: ROUTE_CONSTANTS.PRIVATE,
		component: PrivateLayoutComponent
	},
	{
		path: '**',
		redirectTo: ROUTE_CONSTANTS.PUBLIC
	}
]
