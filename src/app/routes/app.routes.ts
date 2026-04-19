import {Routes} from '@angular/router'
import {HomePageComponent} from '@pages/homepage'
import {AppRoutes} from '@shared/lib/router'

export const appRoutes: Routes = [
	{
		path: AppRoutes.MAIN,
		component: HomePageComponent
	}
]
