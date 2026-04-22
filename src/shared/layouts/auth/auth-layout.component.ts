import {Component, HostBinding} from '@angular/core'
import {RouterOutlet} from '@angular/router'

@Component({
	selector: 'app-auth-layout',
	templateUrl: './auth-layout.component.html',
	styleUrl: './auth-layout.component.scss',
	imports: [RouterOutlet]
})
export class AuthLayoutComponent {
	@HostBinding('class') className = 'auth-layout'
}
