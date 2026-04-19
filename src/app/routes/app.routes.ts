import {Routes} from '@angular/router'
import {HomePageCompoennt} from '@pages/home-page'
import {AppRoutes} from '@shared/lib/router'

export const appRoutes: Routes = [
	{
		path: AppRoutes.MAIN,
		component: HomePageCompoennt
	}
]
