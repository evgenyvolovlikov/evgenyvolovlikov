import {Component, Input} from '@angular/core'

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	@Input() type = 'submit'
	@Input() isDisabled = false
	@Input() isLoading = false
}
