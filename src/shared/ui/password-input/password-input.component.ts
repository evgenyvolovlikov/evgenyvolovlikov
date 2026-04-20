import {CommonModule} from '@angular/common'
import {Component, EventEmitter, Input, Output} from '@angular/core'
import {FormsModule} from '@angular/forms'

export enum EPasswordInputIcons {
	OPENED = 'icons/eye_opened.svg',
	CLOSED = 'icons/eye_closed.svg'
}

export type TPasswordInput = 'text' | 'password'

@Component({
	selector: 'app-password-input',
	templateUrl: './password-input.component.html',
	styleUrl: './password-input.component.scss',
	standalone: true,
	imports: [FormsModule, CommonModule]
})
export class PasswordInput {
	@Input() type: TPasswordInput = 'password'
	@Input() iconUrl = 'icons/lock.svg'
	@Input() placeholder = 'Пароль'
	@Input() disabled = false
	@Input() buttonIcon: EPasswordInputIcons = EPasswordInputIcons.CLOSED

	@Input() value: string | null = null
	@Output() controlValue: EventEmitter<string> = new EventEmitter<string>()

	onInput(event: Event): void {
		const target = event.target as HTMLInputElement
		this.value = target.value
		this.controlValue.emit(this.value)
	}

	onButtonToggleClick(): void {
		if (this.type === 'password') {
			this.buttonIcon = EPasswordInputIcons.OPENED
			this.type = 'text'
		} else {
			this.buttonIcon = EPasswordInputIcons.CLOSED
			this.type = 'password'
		}
	}
}
