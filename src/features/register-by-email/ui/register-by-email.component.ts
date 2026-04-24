import {Component, computed, inject, signal} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {Router, RouterLink} from '@angular/router'
import {AppRoutes} from '@shared/const/router'
import {ButtonComponent} from '@shared/ui/button'
import {InputComponent} from '@shared/ui/input'

@Component({
	selector: 'app-register-by-email',
	templateUrl: './register-by-email.component.html',
	styleUrl: './register-by-email.component.scss',
	imports: [FormsModule, RouterLink, InputComponent, ButtonComponent]
})
export class RegisterByEmailComponent {
	private router = inject(Router)
	protected readonly AppRoutes = AppRoutes

	email = signal('')
	username = signal('')
	password = signal('')
	confirmPassword = signal('')

	isSubmitted = signal(false)
	isLoading = signal(false)

	private isPasswordsMatch = computed(
		() => this.password() === this.confirmPassword()
	)

	showPasswordMismatchError = computed(
		() => this.isSubmitted() && !this.isPasswordsMatch()
	)

	isFormValid = computed(() => {
		const isEmailValid = this.email().includes('@')
		const isNameValid = this.username().trim().length > 0
		const isPassValid = this.password().length >= 6

		return isEmailValid && isNameValid && isPassValid && this.isPasswordsMatch()
	})

	async onRegister(): Promise<void> {
		this.isSubmitted.set(true)

		if (!this.isFormValid()) return

		this.isLoading.set(true)

		const requestData = {
			username: this.username(),
			email: this.email(),
			password: this.password()
		}

		try {
			console.log('Отправка данных...')

			await new Promise(resolve =>
				setTimeout(() => resolve(requestData), 2000)
			).then(console.log)

			await this.router.navigate([AppRoutes.ACCOUNT, AppRoutes.PROFILE])
		} catch (error) {
			console.error('Ошибка при регистрации', error)
		} finally {
			this.isLoading.set(false)
		}
	}
}
