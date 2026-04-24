import {Component, input, signal} from '@angular/core'
import {RouterModule} from '@angular/router'
import {NavLink} from '@shared/model'

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	links = input.required<NavLink[]>()

	collapsed = signal(true)
	onToggle() {
		this.collapsed.update(prev => !prev)
	}
}
