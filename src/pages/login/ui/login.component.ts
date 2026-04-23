import {Component} from '@angular/core'
import {LoginByEmailComponent} from '@features/login-by-email'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [LoginByEmailComponent],
	templateUrl: './login.component.html'
})
export class LoginPageComponent {}
