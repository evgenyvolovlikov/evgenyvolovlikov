import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

import {SidebarComponent} from '@widgets/sidebar'
import {ACCOUNT_LINKS} from '../config/navigation'

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [SidebarComponent, RouterOutlet],
	templateUrl: './account.component.html',
	styleUrl: './account.component.scss'
})
export class AccountPageComponent {
	readonly navLinks = ACCOUNT_LINKS
}
