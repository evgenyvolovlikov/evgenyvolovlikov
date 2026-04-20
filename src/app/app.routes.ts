import {Routes} from '@angular/router'
import {HomePageComponent} from '@pages/home'
import {ROUTE_CONSTANTS} from '@shared/lib/router'

export const appRoutes: Routes = [
	{
		path: ROUTE_CONSTANTS.HOME,
		component: HomePageComponent
	}
]
