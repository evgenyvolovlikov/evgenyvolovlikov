import {Component} from '@angular/core'
import {SidebarComponent} from '@widgets/sidebar'

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [SidebarComponent],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss'
})
export class ProfilePageComponent {}
