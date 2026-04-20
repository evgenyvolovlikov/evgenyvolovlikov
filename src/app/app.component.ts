import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {InputComponent} from '@shared/ui/input'
import {PasswordInput} from '@shared/ui/password-input'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, InputComponent, PasswordInput],
	templateUrl: './app.component.html'
})
export class AppComponent {
	onInputChange(event: string | null): void {
		console.log(event)
	}

	onPasswordInputChange(event: string): void {
		console.log(event)
	}
}
