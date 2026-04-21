import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {InputComponent} from '@shared/ui/input'
import {PasswordInput} from '@shared/ui/password-input'
import {ButtonComponent} from '@shared/ui/button'

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.scss',
	imports: [InputComponent, PasswordInput, ButtonComponent, RouterLink]
})
export class LoginPageComponent {}
