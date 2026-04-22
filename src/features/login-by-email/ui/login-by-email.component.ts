import {Component, computed, signal} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {RouterLink} from '@angular/router'
import {AppRoutes} from '@shared/const/router'
import {ButtonComponent} from '@shared/ui/button'
import {InputComponent} from '@shared/ui/input'

@Component({
	selector: 'app-login-by-email',
	standalone: true,
	imports: [FormsModule, RouterLink, InputComponent, ButtonComponent],
	templateUrl: './login-by-email.component.html',
	styleUrl: './login-by-email.component.scss'
})
export class LoginByEmailComponent {
	protected readonly AppRoutes = AppRoutes

	email = signal('')
	password = signal('')

	isFormValid = computed(() => {
		const isPasswordOk = this.password().length >= 6
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const isEmailOk = emailRegex.test(this.email())

		return isEmailOk && isPasswordOk
	})

	onEmailInput(value: string) {
		this.email.set(value)
	}

	onPasswordInput(value: string) {
		this.password.set(value)
	}

	onSubmit() {
		if (!this.isFormValid()) return
		console.log('Данные к отправке:', {
			email: this.email(),
			password: this.password()
		})
	}
}
