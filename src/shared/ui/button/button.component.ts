import {
	Component,
	ContentChild,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	AfterViewInit
} from '@angular/core'
import {FormsModule} from '@angular/forms'

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	imports: [FormsModule],
	styleUrl: './button.component.scss'
})
export class ButtonComponent implements AfterViewInit {
	@Input() isDisabled = false
	@ContentChild('btnContent') btnRef!: ElementRef | null

	ngAfterViewInit(): void {
		console.log(this.btnRef)
	}

	@Output() btnClick: EventEmitter<void> = new EventEmitter<void>()
	onBtnClick(): void {
		this.btnClick.emit()
	}
}
