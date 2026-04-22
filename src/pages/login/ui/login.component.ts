import {Component} from '@angular/core'
import {LoginByEmailComponent} from '@features/login-by-email'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [LoginByEmailComponent],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginPageComponent {}
