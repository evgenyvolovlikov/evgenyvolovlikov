import {Component, Input} from '@angular/core'
import {FormsModule} from '@angular/forms'

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	imports: [FormsModule],
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	@Input() title = 'Новая кнопка'
}
