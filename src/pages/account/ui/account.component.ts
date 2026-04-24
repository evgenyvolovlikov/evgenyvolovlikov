import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {StickyComponentLayout} from '@shared/layouts/sticky'
import {SidebarComponent} from '@widgets/sidebar'

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [StickyComponentLayout, SidebarComponent, RouterOutlet],
	templateUrl: './account.component.html'
})
export class AccountPageComponent {}
