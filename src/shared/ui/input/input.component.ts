import {Component, EventEmitter, Input, Output} from '@angular/core'

export type InputType = 'text' | 'password' | 'email'

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss'
})
export class InputComponent {
	@Input() type: InputType = 'text'
	@Input() autocomplete = 'off'
	@Input() placeholder = ''
	@Input() value = ''
	@Input() name = ''

	@Output() controlValue: EventEmitter<string> = new EventEmitter<string>()

	onInput(event: Event) {
		const target = event.target as HTMLInputElement
		this.value = target.value
		this.controlValue.emit(this.value)
	}
}
