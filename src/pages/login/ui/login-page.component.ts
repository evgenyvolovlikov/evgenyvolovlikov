import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {InputComponent} from '@shared/ui/input'
import {PasswordInput} from '@shared/ui/password-input'
import {ButtonComponent} from '@shared/ui/button'

export interface INavConst {
	text: string
	iconUrl: string
	iconUrlActive: string
	link: string
	id: number
}

export const NAV_CONST: INavConst[] = [
	{
		text: 'Главаня',
		iconUrl: 'menu/dashboard.svg',
		iconUrlActive: 'menu/dashboard-active.svg',
		link: '/private/dashboard',
		id: 0
	}
]

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.scss',
	imports: [InputComponent, PasswordInput, ButtonComponent, RouterLink]
})
export class LoginPageComponent {
	navLinks: INavConst[] = NAV_CONST
}
