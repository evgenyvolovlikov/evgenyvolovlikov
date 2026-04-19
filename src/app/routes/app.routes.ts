import {Routes} from '@angular/router'
import {HomePageComponent} from '@app/pages/homepage'
import {AppRoutes} from '@app/shared/lib/router'

export const appRoutes: Routes = [
	{
		path: AppRoutes.MAIN,
		component: HomePageComponent
	}
]
