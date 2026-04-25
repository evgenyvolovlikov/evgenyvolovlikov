import {Component} from '@angular/core'
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router'
import {NgOptimizedImage} from '@angular/common'
import {AppNavButtonComponent} from '@shared/ui/nav-button/nav-button.component'
import {INavConst, NAV_CONST} from '@shared/const/menu-items.const'

@Component({
	selector: 'app-private-layout',
	templateUrl: './private-layout.component.html',
	styleUrl: './private-layout.component.scss',
	standalone: true,
	imports: [
		RouterOutlet,
		NgOptimizedImage,
		AppNavButtonComponent,
		RouterLink,
		RouterLinkActive
	]
})
export class PrivateLayoutComponent {
	navLinks: INavConst[] = NAV_CONST

	onLogoutClick(): void {
		console.log('click')
	}
}
